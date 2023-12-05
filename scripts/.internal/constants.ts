import { join } from 'path';

const ROOT = join(__dirname, '../../');
export const PATHS = {
  ROOT,
  PACKAGES: join(ROOT, './packages'),
  EXAMPLES: join(ROOT, './examples'),
  LERNA_CONFIG: join(ROOT, './lerna.json'),
} as const;

export const SCRIPTS = {
  BUNDLE_DEPS: 'umy-scripts bundleDeps',
  DEV: 'umy-scripts father dev',
  BUILD: 'umy-scripts father build',
  TEST_TURBO: 'umy-scripts jest-turbo',
} as const;
