import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../Components/useTogglePasswordVisibility2';
import ProfilingHeader from '../Components/ProfilingHeader';
import ProfilingButton from '../Components/ProfilingButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup =()=>{
    const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const { confirmPasswordVisibility, handleConfirmPasswordVisibility } =
  useTogglePasswordVisibility2();
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation= useNavigation();
  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badName, setBadName] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [comparisonCheck, setComparisonCheck] = useState(false);

  const validate =()=>{
    if (name ==''){
      setBadName(true);
    }else{
      setBadName(false);
      if (email ==''){
        setBadEmail(true);
      }else{
        setBadEmail(false);
        if(password == ''){
          setBadPassword(true);
        }else{
          setBadPassword(false);
          if(confirmPassword == ''){
            setBadConfirmPassword(true);
          }else{
            setBadConfirmPassword(false);        
            if(password!== confirmPassword){
              setComparisonCheck(true);
            }else{
              setComparisonCheck(false);
              saveData();

            }
          }
        }
      }
    }
    
    
    
    setTimeout(()=>{
      if(badName==false && badEmail==false && badPassword==false && badConfirmPassword==false){
      }
    },2000);

    
  };

  const saveData =async ()=>{
    
      await AsyncStorage.setItem('NAME',name);
      await AsyncStorage.setItem('EMAIL',email);
      await AsyncStorage.setItem('PASSWORD',password);
      navigation.goBack();
    
  }

  return (
    <View style={styles.container}>
   
      <ProfilingHeader/>

      <View style={styles.container2}>
        
        <Text style={styles.title1}>WELCOME</Text>
      </View>

      <View style={styles.logincontainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={text=> setname(text)}/>
        {badName==true && (<Text style={{color:'red',fontSize:12, marginTop:5}}>Please enter name</Text>)}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={text=> setemail(text)}/>
        {badEmail==true && (<Text style={{color:'red', marginTop:5, fontSize: 12}}>Please enter email</Text>)}
        <Text style={styles.label1}>Password</Text>
        <View style={styles.input1}>
        <TextInput secureTextEntry={passwordVisibility} value={password} onChangeText={text => setPassword(text) } style={{width:'85%'}}/>
        <Pressable onPress={handlePasswordVisibility}><Image source={require('../images/eye.png')} style={{alignSelf:'flex-end',marginTop:13}}/></Pressable>
        </View>
        {badPassword==true && (<Text style={{color:'red', marginTop:5,fontSize: 12}}>Please enter passowrd</Text>)}
        <Text style={styles.label1}>Confirm Password</Text>
        <View style={styles.input1}>
        <TextInput secureTextEntry={confirmPasswordVisibility} value={confirmPassword} onChangeText={text => setConfirmPassword(text) } style={{width:'85%'}}/>
        <Pressable onPress={handleConfirmPasswordVisibility}><Image source={require('../images/eye.png')} style={{alignSelf:'flex-end',marginTop:13}}/></Pressable>
        </View>
        {badConfirmPassword==true && (<Text style={{color:'red', marginTop:5,fontSize: 12}}>Please enter password</Text>)}
        {comparisonCheck==true && badConfirmPassword== false && (<Text style={{color:'red', marginTop:5,fontSize: 12}}>Passwords don't Match</Text>)}
        <View style={{marginTop:'5%'}}>
        <ProfilingButton title="SIGN UP" onPress={()=>{validate();}}/>
        </View>
        {/* <Text style={styles.text}>Already have an account?<Pressable><Text style={styles.text1}> SIGN IN</Text></Pressable></Text> */}
        <View style={{flexDirection:'row', alignSelf:"center", marginRight:25}}>
        <Text style={styles.text}>Already have an account?</Text>
        <Pressable onPress={()=>navigation.goBack()}><Text style={styles.text1}>SIGN IN</Text></Pressable>
        </View>
        

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
    marginTop:'5%',
    
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
    height:600,
    marginTop: '5%',
    elevation: 10,
    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    paddingTop: '5%',
    paddingLeft: '8%',
  },
  label:{
    color:'#CEBB9E',
    fontSize: 14,
    marginTop: '5%',
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
  },
  text:{
    color:'#CEBB9E',
    alignSelf:'center',
    marginRight:6,
    marginTop:'10%',
    fontFamily:'NunitoSans-SemiBold'

  },
  text1:{
    color:'#62442B',
    fontFamily:'NunitoSans-SemiBold',
    marginTop:'58%',

  }
 

});
export default Signup;