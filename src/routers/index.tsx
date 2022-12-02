/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {HomeScreen} from '@animation/screens/home';
import {AnimationScreen} from '@animation/screens/animation';
import {ChartScreen} from '@animation/screens/chart';

const Stack = createNativeStackNavigator();

function RootRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRoute;
