import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Main from './pages/Main';

export default function createNavigator(isLoggedIn = false) {
  const Private = createStackNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  );

  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Private,
      },
      {
        initialRouteName: isLoggedIn ? 'Private' : 'SignIn',
      },
    ),
  );
}
