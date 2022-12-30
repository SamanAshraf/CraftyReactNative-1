import React from 'react';
import AppNavigator from './src/AppNavigator';
import BottomNavigator from './src/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
const App = () => (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>

);

export default App;