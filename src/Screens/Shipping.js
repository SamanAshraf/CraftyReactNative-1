import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { async } from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth,db } from '../firebase';
import { push, ref,onValue, child } from "firebase/database";

import { set } from 'firebase/database';


const Shipping =()=>{
  const navigation= useNavigation();
  const [fname,setfname] = useState('');
  const [address,setaddress] = useState('');
  const [city,setcity] = useState('');
  const [contact,setcontact] = useState('');
  const [additionalinfo,setadditionalinfo] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [data, setdata] = useState(null);
  

  const writeUserData = async()=> {
    const userId = await AsyncStorage.getItem('userId');
    const dbRef = ref(db, '/users');
    
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if(childKey===userId){
          console.log(childData);
          setdata(childData);
          //setname(childData.name);
          //setemail(childData.email);
        }
        
      });
    })
    console.log(data);
    console.log(data.email);
  
    await set(ref(db, 'users/' + userId), {
      name:data.name,
      email:data.email,
      fname: fname,
      address: address,
      city: city,
      contact: contact,
      additionalinfo: additionalinfo
    });
     alert('Your Shipping Address saved Successfully')
  }

    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Shipping Address</Text>
      </View>
      <TextInput style={styles.input} placeholder="Full name*" placeholderTextColor={'#62442B'} value={fname} onChangeText={setfname}
 />
      <TextInput style={styles.input}   placeholder="Address*"  placeholderTextColor={'#62442B'} value={address} onChangeText={setaddress}/>
      <TextInput style={styles.input}   placeholder="City*"  placeholderTextColor={'#62442B'} value={city} onChangeText={setcity}/>
      <TextInput style={styles.input}   placeholder="Contact*"  placeholderTextColor={'#62442B'} value={contact} onChangeText={setcontact} keyboardType="numeric"/>
      <TextInput style={styles.textarea}   placeholder="Additonal Information" placeholderTextColor={'#62442B'} value={additionalinfo} onChangeText={setadditionalinfo} />
      <TouchableOpacity onPress={()=> writeUserData()} style={styles.Button}><Text style={styles.buttontext}>Save Address</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width:335,
        height: 66,
        margin: 12,
        borderWidth: 1,
        borderColor:'#62442B',
        padding: 10,
        borderRadius:4,
        marginTop:30,
      backgroundColor:'#FDF4E7',
      fontSize:16,
      fontFamily: 'NunitoSans-SemiBold'
 },
    textarea: {
        height:124,
        width:335,
        margin: 12,
        borderWidth: 1,
        paddingBottom:60,
        paddingLeft:10,
        borderRadius:4,
        marginTop:30,
        backgroundColor:'#FDF4E7',
        borderColor:'#62442B',
        fontSize:16,
      fontFamily: 'NunitoSans-SemiBold'


    },

  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%'
  },
  header: {
    marginTop:'5%',
    flexDirection:'row',
  
  },
  title :{
    color: '#62442B',
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    letterSpacing:2,
    textAlign:'center',
    paddingLeft:80
  },

  Button:{
    backgroundColor: '#62442B',
    width: 335,
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
export default Shipping;