import {name as appName} from '../../app.json';

const screenName = (name) => `com.${appName}.${name}`;
const SCREENS = {
  home: screenName('HOME'),
  calendar: screenName('CALENDAR'),
  folder: screenName('FOLDER'),
  login: screenName('LOGIN'),
  signup: screenName('SIGNUP'),
  task: screenName('TASK'),
};

export default SCREENS;
