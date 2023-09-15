// /*
//  * For a detailed explanation regarding each configuration property, visit:
//  * https://jestjs.io/docs/configuration
//  */

module.exports = {
  roots: ['<rootDir>/__tests__'],
  testMatch: [
    // '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/__tests__/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '@tc-lib/utils': '<rootDir>/src',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    // '\\.(scss|css|less)$': 'jest-transform-css',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
    //   '<rootDir>/config/jest/fileTransform.js',
  },
};
