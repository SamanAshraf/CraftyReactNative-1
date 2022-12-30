import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image} from 'react-native';

import Favorites from './Screens/Favorites';
import Notifications from './Screens/Notifications';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const BottomNavigator= () => {

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {height: 75,backgroundColor:'#62442B'},
      headerShown:false,
      activeTintColor: 'white',
      labelStyle:{fontSize:12,paddingBottom:5},
    }}
    
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (<Icon name="home" size={25} color={'white'}/>),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarIcon: () => (<Icon1 name="favorite" size={25}/>),
        tabBarShowLabel: false
      }}/>
  
      <Tab.Screen name="Notification" component={Notifications} options={{
        tabBarIcon: () => (<Icon2 name="notifications-outline" size={25}/>),
        tabBarShowLabel: false
      }}/>
      
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => (<Icon2 name="person-outline" size={25}/>),
        tabBarShowLabel: false
      }}/>
      
      
    </Tab.Navigator>
     
  );
}

export {BottomNavigator};