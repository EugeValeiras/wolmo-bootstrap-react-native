const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const iosAppIcons = require('./iosAppIcons');
const fastlaneFiles = require('./fastlaneFiles');
const iosProjectSetup = require('./iosProjectSetup');
const disableLandscapeOrientation = require('./disableLandscapeOrientation');
const pushNotificationsFeatureFiles = require('./pushNotificationsFeatureFiles');
const loginFeatureFiles = require('./loginFeatureFiles');
const drawerFeatureFiles = require('./drawerFeatureFiles');
const enableFullscreen = require('./tabletSetup');
const babelrcSetup = require('./babelrcSetup');

module.exports = function index() {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Creating project boilerplate' }).start();

  // ----------------     add package.json scripts     ----------------
  packageJsonScripts.bind(this)();

  // ----------------     eslint config file     ----------------
  eslintSetup.bind(this)();

  // ----------------     base app files     ----------------
  baseFilesTemplate.bind(this)();

  // ----------------     ios app icons     ----------------
  iosAppIcons.bind(this)();

  // ----------------     fastlane setup     ----------------
  fastlaneFiles.bind(this)();

  // ----------------     babelrc setup     ----------------
  babelrcSetup.bind(this)();

  // ----------------     fix bundle identifier     ----------------
  iosProjectSetup.bind(this)();

  if (this.features.landscape) {
    // ----------------     disable landscape orientiation for both android and ios     ----------------
    disableLandscapeOrientation.bind(this)();
  }

  // ----------------     features     ----------------
  if (this.features.pushnotifications) {
    pushNotificationsFeatureFiles.bind(this)();
  }
  if (this.features.login) {
    loginFeatureFiles.bind(this)();
  }
  if (this.features.drawerios || this.features.drawerandroid) {
    drawerFeatureFiles.bind(this)();
  }

  // --------------- Enables fullscreen on iPad ----------------------------
  enableFullscreen.bind(this)();

  spinner.succeed('Boilerplate ready!');
};
