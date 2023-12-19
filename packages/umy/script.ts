import { writeFileSync } from 'fs';
import { dashToPascalCase } from './src/react-component-lib/utils';
const components = [
  'elevated-button',
  'filled-button',
  'filled-tonal-button',
  'outlined-button',
  'text-button',
  'checkbox',
  'assist-chip',
  'chip-set',
  'filter-chip',
  'input-chip',
  'suggestion-chip',
  'dialog',
  'divider',
  'elevation',
  'branded-fab',
  'fab',
  'filled-field',
  'outlined-field',
  'focus-ring',
  'icon',
  'filled-icon-button',
  'filled-tonal-icon-button',
  'icon-button',
  'outlined-icon-button',
  'list',
  'list-item',
  'menu',
  'menu-item',
  'sub-menu',
  'circular-progress',
  'linear-progress',
  'radio',
  'ripple',
  'filled-select',
  'outlined-select',
  'select-option',
  'slider',
  'switch',
  'primary-tab',
  'secondary-tab',
  'tabs',
  'filled-text-field',
  'outlined-text-field',
];

let str = `// 这个文件请运行命令生成，请勿手动修改，将会被脚本覆盖。
import '@material/web/all';
import { createReactComponent } from './react-component-lib';
import type { ${components
  .map((i) => `Md${dashToPascalCase(i)}`)
  .join(',')} } from './types';
  ${components
    .map(
      (i) => `export const ${dashToPascalCase(
        i,
      )} = createReactComponent<Md${dashToPascalCase(i)}, any>(
'md-${i}',
);`,
    )
    .join('\n')}
  `;

writeFileSync('./src/components/index.tsx', str, 'utf-8');
