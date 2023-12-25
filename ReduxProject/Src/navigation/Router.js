import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import ProfileScreen from '../Screens/profile/ProfileScreen'

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
