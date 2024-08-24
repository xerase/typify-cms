import { eslint } from '@mkas3/eslint';

export default eslint({
  exports: true,
  imports: true,
  stylistic: true,
  typescript: {
    tsconfigPath: 'tsconfig.json'
  }
}, {
  rules: {
    'ts/consistent-type-definitions': 'off'
  }
});
