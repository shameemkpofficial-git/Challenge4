/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Axios from './Axios';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Axios);

