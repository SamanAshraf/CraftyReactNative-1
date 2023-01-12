import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { getProducts, getProduct, getProductC } from '../ProductsService';
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const Checkout =({route})=>{
  const navigation= useNavigation();
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  //const [data, setData] = useState(g{});
  const {Total}= route.params;
  const [totalprice, settotalprice]= useState(1000);
  



  const getDataa= async()=>{
    const userId = await AsyncStorage.getItem('userId');
    const db = getDatabase();
    const dbRef = ref(db, '/users/'+userId);
    let count =0;
    const array =[];
    onValue(dbRef, (snapshot) => {
        const childKey = snapshot.key;
        const childData = snapshot.val();
        //console.log(childKey);
        setname(childData.fname);
        setaddress(childData.address);
        setcity(childData.city);
        setcontact(childData.contact);
        setemail(childData.email);
        
        //setData(childSnapshot);
        //array[count]=childData;
        //console.log(array[count]);
        //console.log(count);
        //count =count +1;
  
  })
  }
      
  useEffect(() => {
      getDataa();
    // settotalprice(parseInt(Total)+1000);

  });
  


    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View> 
      <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:30}}>
        <Text style={{fontSize:18,color:'#62442B'}}>Shipping Details</Text>
        <TouchableOpacity></TouchableOpacity>
        <Icon name='edit' size={24} style={{color:'#62442B'}} onPress={()=> navigation.navigate('Edit',{Name:name,Address:address, Contact:contact,Email:email})}></Icon>
      </View>

      <View style={styles.rectangle}> 
      <Text style={{...styles.editbox,borderBottomWidth:1,
    borderBottomColor:'#CEBB9E'}}>{name}</Text>
      <Text style={{...styles.editbox,borderBottomWidth:1,
    borderBottomColor:'#CEBB9E'}}> {address} {city} </Text>
      <Text style={{...styles.editbox,borderBottomWidth:1,
    borderBottomColor:'#CEBB9E'}}> {contact} </Text>
      <Text style={styles.editbox}> {email} </Text>
      </View>

      <View style={styles.subtotal}>
        <View style={styles.amount}>
            <Text style={styles.amounttext}>Sub Total</Text>
            <Text style={styles.amounttext1}>{Total} PKR</Text>
        </View>
        <View style={styles.amount}>
            <Text style={styles.amounttext}>Delivery Charges</Text>
            <Text style={styles.amounttext1}>1000 PKR</Text>
        </View>
        <View style={styles.amount}>
        <Text style={styles.amounttext}>Total Amount</Text>
        <Text style={styles.amounttext1}>{parseInt(Total)+1000} PKR</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={()=> navigation.navigate('Congrats')}><Text style= {styles.buttontext}>Submit Order</Text></TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
    amounttext:{
        color: '#62442B',
    
    fontFamily:'NunitoSans-SemiBold',
    fontSize:14
    },
    amounttext1:{
        color: '#62442B',

        fontFamily:'NunitoSans-SemiBold',
        fontSize:18
        },
    amount:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
       
    },
  rectangle: {
    width:335,
    height:250,
    backgroundColor: '#FDF4E7',
    marginTop:30,
    borderRadius:8,
    marginLeft:5
    
  },
  subtotal:{
    width:335,
    height:135,
    backgroundColor: '#FDF4E7',
    marginTop:30,
    borderRadius:8,
    marginLeft:5
  },
  editbox:{
    
    padding:20,
    color: '#62442B',
    fontFamily:'NunitoSans-SemiBold',
    fontSize:14

  },
  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%',
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
    marginLeft:110
  },

  Button:{
    backgroundColor: '#62442B',
    width: 285,
    height:60,
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
export default Checkout;