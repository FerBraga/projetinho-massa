const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>/"],
});

module.exports = module.exports = async () => {
  const config = await jestConfig();
  config.transformIgnorePatterns = ["node_modules/(?!.*)"];
  return config;
};
