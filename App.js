import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import CharScreen from './screens/CharScreen';

import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <StatusBar style='light' />

         <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='CharScreen' component={CharScreen} options={{ title: 'Char' }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
