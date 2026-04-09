import baseVbetsch from '@vbetsch/config-jest/base';
import strictVbetsch from '@vbetsch/config-jest/strict';

export default {
  ...baseVbetsch,
  ...strictVbetsch,

  /* Overrides */
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
