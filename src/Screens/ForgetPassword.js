import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable, Alert, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import ProfilingHeader from '../Components/ProfilingHeader';
import ProfilingButton from '../Components/ProfilingButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastAndroid } from 'react-native';


const ForgetPassword =()=>{  
  const navigation= useNavigation();
  const [email,setEmail] = useState('');

    function resetEmail(){
       
        auth.sendPasswordResetEmail(email).then((response)=>{
            ToastAndroid.show("Please check your email to reset password", ToastAndroid.SHORT)
            navigation.navigate("Login")
        }).catch(error=> ToastAndroid.show(error.message, ToastAndroid.SHORT))
    }

  return (
    <View style={styles.container}>
   
      <ProfilingHeader/>
      <View style={styles.container2}>
        <Text style={styles.title1}>FORGET YOUR PASSWORD?</Text>
      </View>

      <View style={styles.logincontainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} 
        onChangeText={setEmail} 
        />
        <ProfilingButton title="NEXT" onPress={resetEmail}/>
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
    marginTop:'30%',
    
  },
  
  title1:{
    color:'#62442B',
    fontFamily: 'Gelasio-Bold',
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 45,
  },
  logincontainer:{
    backgroundColor: '#FDF4E7',
    width:345,
    height:240,
    marginTop: '15%',
    elevation: 10,
    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    paddingTop: '8%',
    paddingLeft: '8%',
  },
  label:{
    color:'#CEBB9E',
    fontSize: 14,
  },
  label1:{
    marginTop: '7%',
    color:'#CEBB9E',
    fontSize: 14,
  },
  input:{
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#CEBB9E',
  },
  input1:{
    flexDirection:'row',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#CEBB9E',
  },
  forgotpass:{
    color: '#62442B',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'NunitoSans-SemiBold',
    justifyContent:"center",
    alignSelf: "center",
    marginTop:'10%',
    paddingRight: 15,
  },
  
  text:{
    color:'#62442B',
    justifyContent:"center",
    alignSelf: "center",
    fontFamily: 'NunitoSans-SemiBold',
    marginTop:'10%',
    paddingRight: 25,
    fontSize: 18,
  },

  text1: {
    color: '#62442B',
    justifyContent:"center",
    alignSelf: "center",
    fontFamily: 'NunitoSans-SemiBold',
    marginTop:'5%',
    paddingRight: 25,
    fontSize: 18,
  },
  border: {
    borderBottomWidth: 0.6,
    width:'30%',
    alignSelf: "center",
    borderBottomColor: '#CEBB9E',
    marginRight: 20,
    margin:-7,
  }
 

});
export default ForgetPassword;