/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {HomeScreen} from '@RNDemo/screens/home';
import {AnimationScreen} from '@RNDemo/screens/animation';
import {ChartScreen} from '@RNDemo/screens/chart';
import {SplashScreen} from '@RNDemo/screens/splash';
import {SCREEN_NAME} from './ScreenName';
import {LoadingDonut} from '@RNDemo/screens/loadings/loading-donut';
import {FlatListAnimation} from '@RNDemo/screens/flatlist';

const Stack = createNativeStackNavigator();

const mainStack = [
  {
    name: SCREEN_NAME.HomeScreen,
    component: HomeScreen,
  },
  {
    name: SCREEN_NAME.AnimationScreen,
    component: AnimationScreen,
  },
  {
    name: SCREEN_NAME.ChartScreen,
    component: ChartScreen,
  },
  {
    name: SCREEN_NAME.SplashScreen,
    component: SplashScreen,
    options: {
      headerShown: true,
    },
  },
  {
    name: SCREEN_NAME.LoadingScreen,
    component: LoadingDonut,
  },
  {
    name: SCREEN_NAME.FlatListAnimationScreen,
    component: FlatListAnimation,
  },
];

function RootRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {mainStack?.map((item, _) => {
          return (
            <Stack.Screen
              key={item?.name}
              name={item?.name}
              component={item?.component}
              options={{...item?.options}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRoute;
