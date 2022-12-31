import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';
const AdminDashboard =()=>{
 
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../../images/simpledesk.png')} style={{borderRadius:100, width:45, height:45}} />
        <Text style={styles.title}>Dashboard</Text>
        <View style={{flexDirection:'row', marginTop:'2%'}}>
        <Icon1 name='search-outline' color={'#62442B'} size={25} style={{paddingRight:5}}/>
        <Icon name='settings' color={'#62442B'} size={24}/>
        </View>
        </View>  
        <View>
            <Text style={styles.message}>Welcome Shabhi!</Text>
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DC',
    padding: '5%'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'5%',
    padding:'1%',
    marginBottom:'5%'
  },title :{
    color: '#62442B',
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    lineHeight:40,
    letterSpacing:2
    
  },
  message:{
    color: '#62442B',
    fontSize: 18,
    paddingTop:10,
    paddingLeft:15,
    fontFamily:'NunitoSans-SemiBold',
  },
 

});
export default AdminDashboard;