import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import GetStarted from './Screens/GetStarted';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import VerifyCode from './Screens/VerifyCode';
import ResetPassword from './Screens/ResetPassword';
import PasswordUpdated from './Screens/PasswordUpdated';
import AdminLogin from './Screens/Admin/AdminLogin';
import Home from './Screens/Home';
import Favorites from './Screens/Favorites';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import { BottomNavigator } from "./BottomNavigator";
import { AdminBottomNavigator } from "./AdminBottomNavigator";
import Congrats from './Screens/Congrats';
import AdminDashboard from './Screens/Admin/AdminDashboard';
import Cart from './Screens/Cart';
import Product from './Screens/Product';

const Stack = createNativeStackNavigator();
const AppNavigator= () => {

  return (
    
      <Stack.Navigator> 
        
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="PasswordUpdated" component={PasswordUpdated} options={{ headerShown: false }}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }}/>      
        <Stack.Screen name="Congrats" component={Congrats} options={{ headerShown: false }}/>      
        
        <Stack.Screen name="AdminDashboard" component={AdminBottomNavigator} options={{ headerShown: false }}/>      
        

        <Stack.Screen name="Home" component={BottomNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>      
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }}/>      
        
      </Stack.Navigator>
  
  );
}
export default AppNavigator;