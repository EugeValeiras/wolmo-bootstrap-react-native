const { copyFile, copyTemplateFile } = require('../../utils');
const {
  CIRCLE_CONFIG,
  PULL_REQUEST_TEMPLATE,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR,
  CUSTOM_TEXT,
  CUSTOM_TEXT_STYLES,
  CONSTANTS,
  REDUX_UTILS,
  COLORS,
  REDUX_UTILS_TESTS,
  TEST_ESLINT_CONFIG,
  HOME_STYLES,
  README,
  REDUX_STORE,
  REACTOTRON_CONFIG,
  ANDROID_INDEX,
  IOS_INDEX,
  APP,
  SCREENS
} = require('../../files');

const FILES = [
  CIRCLE_CONFIG,
  PULL_REQUEST_TEMPLATE,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR,
  CUSTOM_TEXT,
  CUSTOM_TEXT_STYLES,
  CONSTANTS,
  REDUX_UTILS,
  COLORS,
  REDUX_UTILS_TESTS,
  TEST_ESLINT_CONFIG,
  HOME_STYLES
];

const TEMPLATE_FILES = [README, REDUX_STORE, REACTOTRON_CONFIG, ANDROID_INDEX, IOS_INDEX, APP, SCREENS];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));

  this.fs.copyTpl(
    this.templatePath('src', 'app', 'screens', 'home', this.features.login ? 'index.js' : 'layout.ejs'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'home', 'index.js'),
    { projectName: this.projectName, features: this.features }
  );
};
