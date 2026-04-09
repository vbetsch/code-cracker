import tseslint from 'typescript-eslint';
import baseVbetsch from '@vbetsch/config-eslint/base';
import namingVbetsch from '@vbetsch/config-eslint/naming';
import prettierVbetsch from '@vbetsch/config-eslint/prettier';
import strictVbetsch from '@vbetsch/config-eslint/strict';

export default tseslint.config(
  ...baseVbetsch,
  strictVbetsch,
  namingVbetsch,
  ...prettierVbetsch,

  /* IMPORTANT: You have to add these lines only for the strict module ! */
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /* --- Overrides --- */
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  }
);
