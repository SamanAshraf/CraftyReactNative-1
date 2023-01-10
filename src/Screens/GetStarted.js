import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetStarted =()=>{
  const navigation= useNavigation();
  const [check,setcheck]=useState(false); 
  
  const saveData =async ()=>{
    
  await AsyncStorage.setItem('Check',"true");
}

  return (
    <View style={styles.container}>
       <ImageBackground source={require('../images/getstarted.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.container1}>
        <Image 
            source={require('../images/logo.png')}  
            style={{alignSelf:"center"}} 
          />
          <Text style={styles.title}>
          Exotic minimal Furniture
          </Text>
          <Text style={styles.descp}>
          Choose from wide range of
premium quality wooden furniture
          </Text>
          <TouchableOpacity style={styles.Button} onPress={()=> {saveData();
            navigation.navigate('Login'); }}><Text style={styles.buttontext}>Get Started</Text></TouchableOpacity>
        </View>

      </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62442B',
  },
  container1: {
    flex:1,
    marginTop:'14%',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title :{
    
    color: '#62442B',
    fontSize: 36,
    fontFamily:'Gelasio-Bold',
    lineHeight: 56,
    paddingLeft: 34,
    marginTop: '22%'
    
  },
  descp:{
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily:'Gelasio-Regular',
    lineHeight: 20,
    paddingLeft: 34,
    marginTop: '8%',
    width: '70%',
  },
  Button:{
    backgroundColor: '#62442B',
    width: 159,
    height: 54,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'66%',
    borderRadius:6,
    elevation: 20,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext:{
    color:'#FFFFFF',
    fontSize:18,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'Gelasio-Medium',
  }

});
export default GetStarted;