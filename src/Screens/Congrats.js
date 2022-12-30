import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';

const Congrats =()=>{
  
  //for show password
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
   

      <View style={styles.container2}>
        <Text style={styles.title1}>SUCCESS!</Text>
        
        <Image source={require("../images/Succes.png") } style={styles.image}/>
        <Text style={styles.descp}>Your order will be delivered soon. Thank you for choosing our app!</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Track your orders</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('Home')}><Text style={styles.buttontext1}>BACK TO HOME</Text></TouchableOpacity>
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
    marginTop:'28%',
    
  }, 
  image:{
    marginTop:'10%',
    alignSelf:'center'
  },

title1:{
    color:'#62442B',
    fontFamily: 'Gelasio-Bold',
    fontSize: 36,
    letterSpacing: 1,
    lineHeight: 45,
    alignSelf:'center'
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
  button1:{
    marginTop:'13%',
    width: 315,
    height:60,
    backgroundColor:'#FFFFFF',
    alignSelf:'center',
    borderRadius:6,
    elevation: 5,
    borderWidth:1,
    borderColor:'#62442B'
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
  buttontext1:{
    fontSize:18,
    color: '#62442B',
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
    marginTop:'5%',
    textAlign:'center',
    marginLeft:'5%'
  }

});
export default Congrats;