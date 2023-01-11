import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';
import Icon2  from 'react-native-vector-icons/Entypo';
import { BackHandler } from 'react-native';
import { useEffect } from 'react';
const AdminDashboard =()=>{
 
  const navigation= useNavigation();
  const backAction = () => {
    {
      onPress: () => null
    }
  return true;
};
useEffect(() => {
  BackHandler.addEventListener("hardwareBackPress", backAction);
  return () =>
    BackHandler.removeEventListener("hardwareBackPress", backAction);
}, []);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('../../images/simpledesk.png')} style={{borderRadius:100, width:45, height:45}} />
        <Text style={styles.title}>Dashboard</Text>
        <View style={{flexDirection:'row', marginTop:'2%'}}>
        {/* <Icon1 name='search-outline' color={'#62442B'} size={25} style={{paddingRight:5}}/>
        <Icon name='settings' color={'#62442B'} size={24}/>
         */}</View>
        </View>  
          <Text style={styles.message}>Welcome Shabhi!</Text>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.box}><View style={styles.boxinner}><Icon2 name='text-document' size={20}color={'#FFFFFF'}/></View><Text style={styles.quantity}>10</Text><Text style={styles.name}>Orders</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box}><View style={styles.boxinner}><Icon name='box' size={20}color={'#FFFFFF'}/></View><Text style={styles.quantity}>5</Text><Text style={styles.name}>Products</Text></TouchableOpacity>
        </View>

        <Text style={{...styles.message, marginTop:'9%'}}>Top Selling Products</Text> 
    
      <View style = {styles.border}>
        <View>
        <Image source={require('../../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style= {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
            
        </View>
        <View style={{width:50,height:26, backgroundColor:'#CEBB9E',borderRadius:15,elevation:5}}>
          <Text style={{alignSelf:'center', justifyContent:'center', color:'#62442B', fontSize:14, fontFamily:'NunitoSans-SemiBold', marginTop:'5%'}}>16</Text>
        </View>
        </View>
      </View>
      
      <View style = {styles.border}>
        <View>
        <Image source={require('../../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style= {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
            
        </View>
        <View style={{width:50,height:26, backgroundColor:'#CEBB9E',borderRadius:15,elevation:5}}>
          <Text style={{alignSelf:'center', justifyContent:'center', color:'#62442B', fontSize:14, fontFamily:'NunitoSans-SemiBold', marginTop:'5%'}}>10</Text>
        </View>
        </View>
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
    letterSpacing:2,
    marginRight:30
    
  },
  message:{
    color: '#62442B',
    fontSize: 18,
    paddingTop:10,
    paddingLeft:15,
    fontFamily:'NunitoSans-SemiBold',
  },
  container2:{
    flexDirection:'row',
    marginTop:'10%',
    justifyContent:'space-evenly'
  },
  box:{
    backgroundColor:'#FDF4E7',
    width:150,
    height:128,
    borderRadius:16,
    paddingTop:10,
    paddingLeft:10,
    elevation:10
  },
  boxinner:{
    width:36, height:36, backgroundColor:'#62442B', borderRadius:100,alignItems:'center', justifyContent:'center',
  },
  quantity:{
    fontFamily:'NunitoSans-SemiBold',
    fontSize:24,
    color:'#62442B',
    paddingTop:7
  },
  name:{
    fontFamily:'NunitoSans-Regular',
    fontSize:16,
    color:'#62442B',
    paddingTop:1
  },
  
  border: {
    flexDirection:'row', 
    marginTop:30, 
    borderBottomWidth: 1,
    borderBottomColor: '#CEBB9E',
    padding:10
  },
  cart:{
    backgroundColor: '#CEBB9E',
    width: 34,
    height: 34,
    marginTop:40, 
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:6,
    elevation:6
  },
  Title:{
    color: '#62442B',
    fontSize: 14,
    fontFamily: 'NunitoSans-SemiBold',
  },
  subtite:{
  color: '#62442B', 
  fontSize: 16,
  fontFamily: 'NunitoSans-Bold',
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1
  },
  plus: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between'
},

 

});
export default AdminDashboard;