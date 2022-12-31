import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image} from 'react-native';

import Favorites from './Screens/Favorites';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import Home from './Screens/Admin/AdminDashboard';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import AdminDashboard from './Screens/Admin/AdminDashboard';
const Tab = createBottomTabNavigator();
const AdminBottomNavigator= () => {

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {height: 75,backgroundColor:'#62442B'},
      headerShown:false,
      activeTintColor: 'white',
      labelStyle:{fontSize:12,paddingBottom:5},
    }}
    
    >
      <Tab.Screen name="AdminDashboard" component={AdminDashboard} options={{
        tabBarIcon: ({focused,size}) => (<Icon name="home" size={size} color={focused ? '#FDF4E7' : '#9F845A'}/>),
        tabBarShowLabel: false
      }}/>
      
      
    </Tab.Navigator>
     
  );
}

export {AdminBottomNavigator};