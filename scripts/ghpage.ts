import { PATHS } from './.internal/constants';
import { spawnSync } from './.internal/utils';
// @ts-ignore
import ghpages from 'gh-pages';

(async () => {
  const args = process.argv.slice(2);

  const command = `pnpm run build:docs ${args.join(' ')}`;

  spawnSync(command, { cwd: PATHS.ROOT });

  ghpages.publish(
    'dist',
    {
      branch: 'ghpage',
      repo: 'https://github.com/xiaohuoni/umy.git',
    },
    function (err: any) {
      console.error(err);
    },
  );
})();
