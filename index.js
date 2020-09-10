/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/store/rootReducer'

// const store = createStore(rootReducer);

AppRegistry.registerComponent(appName, () =>  App);
