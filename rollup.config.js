import path from 'path';
import makeConfig from 'rollup-library';

import packageJson from './package.json';

const baseOutput = { name: packageJson.name };

const output = [{
  ...baseOutput,
  format: 'umd',
  file: path.resolve('./', packageJson.main),
}, {
  ...baseOutput,
  format: 'esm',
  file: path.resolve('./', packageJson.module),
}];

export default makeConfig({
  input: 'src/index.js',
  output,
});
