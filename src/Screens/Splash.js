import { StyleSheet, Text, View , Image} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  
  const navigation= useNavigation();
  useEffect(()=>{
    setTimeout(() => {
        getData();
    }, 3000);
  },[]);
  const getData =async ()=>{
    const email = await AsyncStorage.getItem('EMAIL');
    if (email!=='' || email !== null || email !==undefined){
      navigation.navigate('Home');
    }else{
      navigation.navigate('GetStarted');
    }
  };

  return (

      <View style={styles.container}>
      <View style={styles.container1}>
      <Image 
          source={require('../images/splash.png')}  
        style={{ alignSelf:"center", 
        justifyContent:"center"}}/>
      <Text style={styles.text}>Crafty</Text>
      </View>
      </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62442B',
  },
  container1: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    margin:'auto',
  },
  text: {
    fontSize: 40,
    color:'#FFFFFF',
    fontFamily: 'Gelasio-Medium',
    letterSpacing: 2,
    lineHeight: 51,
  },

});

export default Splash;