import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MainTheme } from './src/theme/MainTheme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './src/pages/MainPage';
import Biometry from './src/pages/Biometry';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='biometry' component={Biometry}
            options={{
              title: 'Autenticação',
              headerStyle: {
                backgroundColor: MainTheme.colors.primary,
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
          name='calendar'
          component={MainPage}
          headerBackVisible={false}
          options={{
              title: 'Início',
              headerStyle: {
                backgroundColor: MainTheme.colors.primary,
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
