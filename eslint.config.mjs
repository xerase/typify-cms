import { eslint } from '@mkas3/eslint';

export default eslint(
  {
    exports: true,
    imports: true,
    stylistic: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  {
    rules: {
      'style/comma-dangle': 'off',
      'ts/consistent-type-definitions': 'off',
    },
  }
);
