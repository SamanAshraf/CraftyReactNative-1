import { StyleSheet, Text, View , Image} from 'react-native';
import React, { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const [abc, setAbc] = useState("");

  const navigation= useNavigation();
  useEffect(()=>{
    setTimeout(() => {
        getData();
    }, 3000);
  },[]);
  
  const getData =async ()=>{
    const Check = await AsyncStorage.getItem('Check');
    const userId = await AsyncStorage.getItem('userId');
    const AdminId = await AsyncStorage.getItem('AdminId');
    console.log(AdminId);
    setAbc(userId);
    navigation.navigate('GetStarted');
    /* if(userId!=='' || userId !== null || userId !==undefined){
      navigation.navigate('Home',{userId:userId});
      //navigation.navigate('Login');
    }
    if(userId===null){
        navigation.navigate('Login');
    }
    if(AdminId===null){
        navigation.navigate('Login');
    }
    if(AdminId!=='' ||AdminId!==null || AdminId!==undefined){
      navigation.navigate('AdminDashboard')
    } */
    /* }else{
        navigation.navigate('GetStarted');
    } */
  
    
  };
 
  return (

      <View style={styles.container}>
      <View style={styles.container1}>
      <Image 
          source={require('../images/splash.png')}  
        style={{ alignSelf:"center", 
        justifyContent:"center"}}/>
      <Text style={styles.text}>Craftyyyyy {abc}</Text>
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