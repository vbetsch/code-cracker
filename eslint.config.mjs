import tseslint from 'typescript-eslint';
import baseVbetsch from '@vbetsch/config-eslint/base';
// import jsxVbetsch from '@vbetsch/config-eslint/jsx';
// import namingVbetsch from '@vbetsch/config-eslint/naming';
// import prettierVbetsch from '@vbetsch/config-eslint/prettier';
// import spellcheckVbetsch from '@vbetsch/config-eslint/spellcheck';
// import strictVbetsch from '@vbetsch/config-eslint/strict';

export default tseslint.config(
  ...baseVbetsch,
  // strictVbetsch,
  // namingVbetsch,
  // jsxVbetsch,
  // spellcheckVbetsch,
  // ...prettierVbetsch,

  /* IMPORTANT: You have to add these lines only for the strict module ! */
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       project: './tsconfig.json',
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  // },

  /* --- Overrides --- */
  {
    ignores: [
      // './tests/prettier.test.ts',
    ],
  },

  {
    rules: {
      // 'prettier/prettier': 'error',
    },
  }
);
