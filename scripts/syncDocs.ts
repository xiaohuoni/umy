import { glob, winPath } from '@umijs/utils';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const target = winPath(join(__dirname, '..', 'docs'));

const mds = glob
  .sync('**/*.md', {
    cwd: target,
    absolute: true,
  })
  .map(winPath);
// 多余操作，Quick start 需要重写 docs/quick-start.md
// 已知异常
// md-outlined-text-field type="number"
// md-filled-text-field    type="combobox"
mds.forEach((file) => {
  let content = readFileSync(file, 'utf-8');
  // 替换  `<!-- catalog-only-start --><!-- ` `--><!-- catalog-only-end -->` 为空
  // 替换`images/` 为 `./images/`
  content = content
    .replace('<!-- catalog-only-start --><!-- ', '')
    .replace('--><!-- catalog-only-end -->', '')
    .replaceAll('images/', './images/');
  const htmlArr = content.split('```html');
  const newHtml: string[] = [];
  htmlArr.forEach((h) => {
    const hArr = h.split('```');
    const dashToPascalCase = (str: string) =>
      str
        .toLowerCase()
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join('');
    if (hArr[0] && hArr[1]) {
      // 如果是内容，先把内容放回去
      const a = hArr[0];
      let regex = /<\/?([a-z]+(-[a-z]+)+)[^>]*>/g;
      hArr[0] = hArr[0]
        .replaceAll(regex, function (match) {
          if (match.startsWith('<md-')) {
            return '<' + dashToPascalCase(match.replace('<md-', ''));
          } else if (match.startsWith('</md-')) {
            return '</' + dashToPascalCase(match.replace('</md-', ''));
          }
          return match;
          // if (match[1] === "/") {
          //     // If it's a closing tag, replace with new closing tag
          //     return newTagClose;
          // } else {
          //     // If it's an opening tag, replace with new opening tag
          //     return newTagOpen;
          // }
        })
        .replaceAll('src="..."', 'src="./images/chips/hero.png"');
      newHtml.push(a + '\n```html' + hArr.join('```'));
    } else {
      // 如果不是内容，塞回去
      newHtml.push(h);
    }
  });
  writeFileSync(file, newHtml.join(''), 'utf-8');
});
