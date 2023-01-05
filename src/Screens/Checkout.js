import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';


const Checkout =()=>{
  const navigation= useNavigation();
  const [name, setname] = useState('Saman ASTUPIDDDDDDDDD');
  const [address, setaddress] = useState('House#178, st#334 Islamabad');
  const [contact, setcontact] = useState('03127865893');
  const [email, setemail] = useState('saman.ashraf@gmail.com');


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
    borderBottomColor:'#CEBB9E'}}> Saman Ashraf</Text>
      <Text style={{...styles.editbox,borderBottomWidth:1,
    borderBottomColor:'#CEBB9E'}}> House#178, st#334 Islamabad</Text>
      <Text style={{...styles.editbox,borderBottomWidth:1,
    borderBottomColor:'#CEBB9E'}}> 03127865893</Text>
      <Text style={styles.editbox}> saman.ashraf@gmail.com</Text>
      </View>

      <View style={styles.subtotal}>
        <View style={styles.amount}>
            <Text style={styles.amounttext}>Sub Total</Text>
            <Text style={styles.amounttext1}>95,0000 PKR</Text>
        </View>
        <View style={styles.amount}>
            <Text style={styles.amounttext}>Delivery Charges</Text>
            <Text style={styles.amounttext1}>1000 PKR</Text>
        </View>
        <View style={styles.amount}>
        <Text style={styles.amounttext}>Total Amount</Text>
        <Text style={styles.amounttext1}>96,000 PKR</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Edit')}><Text style= {styles.buttontext}>Submit Order</Text></TouchableOpacity>


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