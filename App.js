import React from 'react';
import AppNavigator from './src/AppNavigator';
import BottomNavigator from './src/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/CartContext.js';

const App = () => (
    <CartProvider>
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    </CartProvider>
    

);

export default App;