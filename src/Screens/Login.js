import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import ProfilingHeader from '../Components/ProfilingHeader';
import ProfilingButton from '../Components/ProfilingButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../firebase';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Login =()=>{
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [check, setCheck] = useState("1");

  const validate =()=>{
    if (email ==''){
      setBadEmail(true);
    }else{
      setBadEmail(false);
      if(password == ''){
        setBadPassword(true);
      }else{
        setBadPassword(false);
        getData();
        if(check==="2"){
          navigation.navigate('Home');
        }
      }
    }
    
  
    
    
  };
 
  const getData =()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setCheck("2");
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });}
  //for show password
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
   
      <ProfilingHeader/>

      <View style={styles.container2}>
        <Text style={styles.title}>Hello  !</Text>
        <Text style={styles.title1}>WELCOME BACK</Text>
      </View>

      <View style={styles.logincontainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={text=>{setemail(text)}}/>
         {badEmail==true && (<Text style={{color:'red',  marginTop:5,fontSize: 12}}>Please enter email id</Text>)}
         
        <Text style={styles.label1}>Password</Text>
        <View style={styles.input1}>
        <TextInput secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text) } style={{width:'85%'}}/>
        <Pressable onPress={handlePasswordVisibility}><Image source={require('../images/eye.png')} style={{alignSelf:'flex-end',marginTop:13}}/></Pressable>
        </View>
         {badPassword==true && (<Text style={{color:'red',  marginTop:5,fontSize: 12}}>Please enter password</Text>)}
         
        <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")}><Text style={styles.forgotpass}>Forgot Password?</Text></TouchableOpacity>

        <ProfilingButton title="LOG IN" onPress={()=>{validate();}}/>

        <TouchableOpacity onPress={()=>navigation.navigate("Signup")}><Text style={styles.text}>SIGN UP</Text></TouchableOpacity>
        <Text style={styles.border}></Text>
        <TouchableOpacity onPress={()=>navigation.navigate('AdminLogin')}><Text style={styles.text1}>ADMIN</Text></TouchableOpacity>
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
    marginTop:'10%',
    
  },
  title: {
    fontSize: 30,
    color:'#CEBB9E',
    fontFamily: 'Gelasio-Regular',
    
  },
  title1:{
    color:'#62442B',
    fontFamily: 'Gelasio-Bold',
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 45,
  },
  logincontainer:{
    backgroundColor: '#FDF4E7',
    width:345,
    height: 480,
    marginTop: '5%',
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
    marginTop: '5%',
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
    color:'black'
  },
  forgotpass:{
    color: '#62442B',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'NunitoSans-SemiBold',
    justifyContent:"center",
    alignSelf: "center",
    marginTop:'5%',
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
  text1:{
    color:'#62442B',
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
export default Login;