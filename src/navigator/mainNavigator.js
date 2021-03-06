import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile176606Navigator from '../features/UserProfile176606/navigator';
import Tutorial176605Navigator from '../features/Tutorial176605/navigator';
import NotificationList176577Navigator from '../features/NotificationList176577/navigator';
import Settings176576Navigator from '../features/Settings176576/navigator';
import Settings176568Navigator from '../features/Settings176568/navigator';
import UserProfile176566Navigator from '../features/UserProfile176566/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile176606: { screen: UserProfile176606Navigator },
Tutorial176605: { screen: Tutorial176605Navigator },
NotificationList176577: { screen: NotificationList176577Navigator },
Settings176576: { screen: Settings176576Navigator },
Settings176568: { screen: Settings176568Navigator },
UserProfile176566: { screen: UserProfile176566Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
