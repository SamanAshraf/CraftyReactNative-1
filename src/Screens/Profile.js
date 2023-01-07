import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, onValue, get} from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import {db,auth} from "../firebase";

const Profile =()=>{
  const navigation= useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
 // const auth = getAuth();
  //const user = auth.currentUser;
  const getData = async () => {
   
      
			const userId = await AsyncStorage.getItem('userId');
      const nameRef = ref(db, 'users/' + userId+ '/name');
      const emailRef = ref(db, 'users/' + userId+ '/email');
      onValue(nameRef, (snapshot) => {
      const data = snapshot.val();
      setname(data);
    });
      onValue(emailRef, (snapshot) => {
      const data = snapshot.val();
      setemail(data);
    });
		
	};
  const signOut=()=>{
    const auth = getAuth();
    signOut(auth).then(logout => {
      navigation.navigate('Login');
    }).catch((error) => {
      // An error happened.
    });
    
  }
  if(name===""){
    getData();
  }
    return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}><Icon name="left" color={'#62442B'} size={20}/></TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'flex-start',margin:30}}>
        <Image source={require('../../assets/Profile/profile.png')} style ={{borderRadius:200}}/>
        <View style= {{marginLeft:20}}>
          <Text style = {{fontFamily:'NunitoSans-Bold', fontSize:20,color:'#62442B'}}>{name}</Text>
          <Text style = {{fontFamily:'NunitoSans-Regular', fontSize:14,color:'#62442B'}}>{email}</Text>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Orders
        </Text>
        <Text style = {styles.subtitle}>
          Already have 10 orders
        </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Shipping Adresses
        </Text>
        <Text style = {styles.subtitle}>
          Adresses
        </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Shipping")}>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Saved
        </Text>
        <Text style = {styles.subtitle}>
          Saved products
        </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Setting
        </Text>
        <Text style = {styles.subtitle}>
          Password
        </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      </View>
            <TouchableOpacity style={styles.Button}><Text style={styles.buttontext} onPress={()=>{navigation.navigate('Login')}}><Image source={require('../../assets/Profile/Logout.png')}/>  Logout</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize:18,
    color:'#62442B'
  },
  subtitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize:12,
    color:'#62442B'

  },
  rectangle: {
    width:335,
    height:80,
    backgroundColor: '#FDF4E7',
    marginTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:15

  },
  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%'
  },
  header: {
    marginTop:'5%',
    flexDirection:'row'
  
  },
  title :{
    color: '#62442B',
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    letterSpacing:2,
    textAlign:'center',
    marginLeft:115
    
  },

  Button:{
    backgroundColor: '#62442B',
    width: 285,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
    marginTop:60,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext:{
    color:'#FFFFFF',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
  },

});
export default Profile;