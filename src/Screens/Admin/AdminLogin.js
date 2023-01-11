import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import { useTogglePasswordVisibility } from '../../Components/useTogglePasswordVisibility';
import ProfilingHeader from '../../Components/ProfilingHeader';
import ProfilingButton from '../../Components/ProfilingButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AdminLogin =()=>{
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
 
  const authenticate =async()=>{
    if(email==="Admin@gmail.com" && password==="admin123"){
      try {
        await AsyncStorage.setItem('AdminId', "12345");
        console.log('Login successs');
      } catch (e) {
        throw e;
      }
      setEmail('');
      setPassword('');
      setErr('');
      navigation.navigate('AdminDashboard');
    }else{
     // navigation.navigate('AdminDashboard');
      setErr("Invalid Credentials");
    }
  }
  
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
   
      <ProfilingHeader/>

      <View style={styles.container2}>
        
        <Text style={styles.title1}>ADMIN'S LOGIN</Text>
      </View>

      <View style={styles.logincontainer}>
        <Text style={{color:'red', marginBottom:5, fontWeight:'bold'}}>{err}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)}/>
        
        <Text style={styles.label1}>Password</Text>

        <View style={styles.input1}>
        <TextInput secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text) } style={{width:'85%',color:'black'}}/>
        <Pressable onPress={handlePasswordVisibility}><Image source={require('../../images/eye.png')} style={{alignSelf:'flex-end',marginTop:13}}/></Pressable>
        </View>
      
        <TouchableOpacity><Text style={styles.forgotpass}>Forgot Password?</Text></TouchableOpacity>

        <ProfilingButton title="LOG IN" onPress={()=>{authenticate();}}/>

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
    marginTop:'15%',
    
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
    height:385,
    marginTop: '10%',
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
    color:'black'
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
    marginTop:'10%',
    paddingRight: 15,
  },
  

 

});
export default AdminLogin;