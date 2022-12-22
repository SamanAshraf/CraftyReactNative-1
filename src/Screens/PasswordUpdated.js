import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';

const PasswordUpdated =()=>{
  
  //for show password
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
   

      <View style={styles.container2}>
        <Text style={styles.title1}>PASSWORD UPDATED!</Text>
        
        <Image source={require("../images/Succes.png") } style={styles.image}/>
        <Text style={styles.descp}>Your password has been changed. Please log in with your new password.</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}><Text style={styles.buttontext}>LOG IN</Text></TouchableOpacity>
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
    margin:'10%',
    marginTop:'35%',
    
  }, 
  image:{
    marginTop:'10%',
    alignSelf:'center'
  },

title1:{
    color:'#62442B',
    fontFamily: 'Gelasio-Bold',
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 45,
  },
  button:{
    marginTop:'13%',
    width: 315,
    height:60,
    backgroundColor:'#62442B',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
  },
  buttontext:{
    fontSize:18,
    color: '#FFFFFF',
    justifyContent:"center",
    alignSelf: "center",
    fontFamily: 'NunitoSans-SemiBold',
    marginTop:'5%',
    letterSpacing: 3,
  },
  descp:{
    color:'#62442B',
    fontFamily:'Gelasio-Regular',
    fontSize: 18,
    textAlign:'center',
    width:283,
    marginTop:'5%'
  }

});
export default PasswordUpdated;