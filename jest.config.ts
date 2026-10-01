export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },

  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^test-utils$": "<rootDir>/test/__utils__/test-utils.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "jsx",
    "js",
    "mjs",
    "cjs",
    "json",
    "node",
  ],
  modulePaths: ["<rootDir>/src"],
  // rootDir лучше не задавать: пусть будет корень проекта
};
