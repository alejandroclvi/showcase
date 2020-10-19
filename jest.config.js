module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native-firebase/firestore|@react-native-firebase/app|@react-native-firebase/auth)',
  ],
  globals: {
    __DEV__: true,
  },
  testEnvironment: 'node',
  collectCoverage: true,
};
