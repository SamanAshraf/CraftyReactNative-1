import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import ProfilingHeader from '../Components/ProfilingHeader';
import ProfilingButton from '../Components/ProfilingButton';
import { useNavigation } from '@react-navigation/native';

const VerifyCode =()=>{
  
  //for show password
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
   
      <ProfilingHeader/>

      <View style={styles.container2}>
        <Text style={styles.title1}>VERIFY CODE</Text>
        <View style={styles.title2box}>
          <Text style={styles.title2}>Enter your verification code from your email that we've sent</Text>
        </View>

        <View style={styles.box} >
            <TextInput style={styles.textbox} keyboardType="numeric"> </TextInput>
            <TextInput style={styles.textbox} keyboardType="numeric"> </TextInput>
            <TextInput style={styles.textbox} keyboardType="numeric"> </TextInput>
            <TextInput style={styles.textbox} keyboardType="numeric"> </TextInput>
        </View>

      </View>
    <View style={styles.button}>
        <ProfilingButton title="VERIFY" onPress={()=>navigation.navigate("ResetPassword")}/>
    </View>
    

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DC',
  },
  container2:{
    marginLeft:'10%',
    marginTop:'35%',
    
  }, 
  title2box:{
    width:250,
    
  },
  title2:{
    color:'#62442B',
    fontFamily: 'Gelasio-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 25,

  },
textbox:{
    width: 60,
    height: 60,
    backgroundColor: '#FDF4E7',
    borderRadius:12,
    color:'black'
},
box :{
  flexDirection:'row',
  justifyContent:'space-between',
  marginRight:'10%',
  marginTop:'10%',
  
},
title1:{
    color:'#62442B',
    fontFamily: 'Gelasio-Bold',
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 45,
  },
  button:{
    alignSelf:'center',
    marginTop:'5%'
  }

});
export default VerifyCode;