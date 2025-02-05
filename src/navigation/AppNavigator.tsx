import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CreateTimerScreen from '../screens/CreateTimerScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
    <Stack.Screen name="CreateTimer" component={CreateTimerScreen} options={{ headerShown: false }} />

      <Stack.Screen name="History" component={HistoryScreen}  options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
};

export default AppNavigator;
