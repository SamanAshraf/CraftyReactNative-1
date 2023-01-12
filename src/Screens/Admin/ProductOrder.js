import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const ProductOrder =()=>{
  const navigation= useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}} onPress={()=>navigation.navigate("OrderHistory")} >
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Order No 238562312</Text>
      </View>
      <Text style={{paddingTop:50,fontFamily:'NunitoSans-SemiBold',fontSize:18,color:'#62442B'}}> Customer Details</Text>
      <View style= {{flexDirection:'row', borderBottomWidth:1}}>
        <View style= {{flexDirection:'column', padding:10}}>
        <Icon2 name="person-outline" size={20} color={'#62442B'} style={{marginTop:5}}/>
        <Icon name="phone" size={20} color={'#62442B'} style={{marginTop:7}} />
        <Icon2 name="location-outline" size={20} color={'#62442B'} style={{marginTop:7}} />
        </View>
        <View>
          <Text style={{margin:5,marginTop:15,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Shabhi ul hassan </Text>
          <Text style={{margin:5,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>03125090786 </Text>
          <Text style={{margin:5,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>house#123 street#02, I8/3 Islamabad</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:1,padding:10}}>
        <View style={{flexDirection:'row',marginTop:20}}>
          <Text style={{marginBottom:20,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Order</Text>
          <Text style={{marginLeft:170,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Qty</Text>
          <Text style={{marginLeft:30,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Amount</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../../../assets/ProductOrder/lamp.png')} style={{borderRadius:10}}></Image>
          <Text style={{marginLeft:10,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold',width:136}}>Black Simple lamp</Text>
          <Text style={{marginRight:5,marginLeft:30,color:'#62442B'}}>2</Text>
          <Text style={{marginRight:5,marginLeft:30,color:'#62442B'}}>4000 pkr</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:20}}>
          <Image source={require('../../../assets/ProductOrder/chair.png')} style={{borderRadius:10}} ></Image>
          <Text style={{marginLeft:10,color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold',width:136}}>Coffee Chair</Text>
          <Text style={{marginRight:5,marginLeft:30,color:'#62442B'}}>2</Text>
          <Text style={{marginRight:5,marginLeft:30,color:'#62442B'}}>40000 pkr</Text>
        </View>
      </View>

      <View>
      <View style={{flexDirection:'row',padding:10}}>
        <Text style={{color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Sub Total</Text>
        <Text style={{marginLeft:155,color:'#62442B'}}>3</Text>
        <Text style={{marginLeft:35,color:'#62442B'}}>16000pkr</Text>
      </View>
      <View style={{flexDirection:'row',padding:10}}>
        <Text style={{color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Delivery Charges</Text>
        <Text style={{marginLeft:140,color:'#62442B'}}>1000pk</Text>
      </View>
      <View style={{flexDirection:'row',padding:10}}>
        <Text style={{color:'#62442B',fontSize:15, fontFamily:'NunitoSans-SemiBold'}}>Net Amount</Text>
        <Text style={{marginLeft:175
          ,color:'#62442B'}}>15000pk</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Cancel Order</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Button1}><Text style={styles.buttontext1}>Confirm Order</Text></TouchableOpacity>      
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginLeft:60
  },

  Button:{
    backgroundColor:'#FDF4E7',
    width: 335,
    height:60,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
    marginTop:30,
    borderColor:'#62442B',
    borderWidth:2,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext:{
    color:'#62442B',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
  },
  Button1:{
    backgroundColor:'#62442B',
    width: 335,
    height:60,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
    marginTop:20,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext1:{
    color:'#FFFFFF',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
  },

});
export default ProductOrder;