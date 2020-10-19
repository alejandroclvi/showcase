/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import SCREENS from './src/constants/screens';
// import screens to register them
import './src/screens/index';

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: '#2b2f33',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.home,
            },
          },
        ],
      },
    },
  });
});
