import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';


const Order =()=>{
  const navigation= useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
      </View>
      
      
    <View style={styles.rectangle}> 
     <View style= {{flexDirection:'row', borderBottomWidth:2,
    borderBottomColor:'#CEBB9E'}}>
     <Text style = {styles.Title}>Order No238562312 </Text>
        <Text style={styles.Date}>20/03/2020 </Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-evenly'}}> 
     <Text style= {styles.subtitle}>Quantity:03</Text>
      <Text style= {styles.subtitle}>Total:4000 PKR</Text>
     </View>
      <View style= {{flexDirection:'row', justifyContent:"space-between"}}>
        <TouchableOpacity style={styles.Detail}><Text style= {styles.DetailText}>Detail</Text></TouchableOpacity>
      </View>
      </View>

      <View style={styles.rectangle}> 
      <View style= {{flexDirection:'row', borderBottomWidth:2,
    borderBottomColor:'#CEBB9E'}}>
     <Text style = {styles.Title}>Order No238562312 </Text>
        <Text style={styles.Date}> 20/03/2020 </Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-evenly'}}> 
     <Text style= {styles.subtitle}>Quantity:03</Text>
      <Text style= {styles.subtitle}>Total:4000 PKR</Text>
     </View>
      <View style= {{flexDirection:'row', justifyContent:"space-between"}}>
        <TouchableOpacity style={styles.Detail}><Text style= {styles.DetailText}>Detail</Text></TouchableOpacity>
      </View>
      </View>

      <View style={styles.rectangle}> 
      <View style= {{flexDirection:'row', borderBottomWidth:2,
    borderBottomColor:'#CEBB9E'}}>
     <Text style = {styles.Title}>Order No238562312 </Text>
        <Text style={styles.Date}> 20/03/2020 </Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-evenly'}}> 
     <Text style= {styles.subtitle}>Quantity:03</Text>
      <Text style= {styles.subtitle}>Total:4000 PKR</Text>
     </View>
      <View style= {{flexDirection:'row', justifyContent:"space-between"}}>
        <TouchableOpacity style={styles.Detail}><Text style= {styles.DetailText}>Detail</Text></TouchableOpacity>
      </View>
      </View>

   
      
    </View>
  );
}

const styles = StyleSheet.create({
  Detail:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    backgroundColor:'#62442B',
    borderBottomRightRadius:4,
    borderTopRightRadius:4,
    width:100,
    height:36,
  },
  DetailText:{
    color:'white',
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
    fontSize:16
  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize:18,
    color:'#62442B',
    padding:15,
    flexDirection:'row', justifyContent:'space-evenly',
    
  },
  subtitle: {
    fontFamily: 'NunitoSans-Bold',
    fontSize:16,
    color:'#62442B', 

  },
  Date: {
    fontFamily: 'NunitoSans-Regular',
    fontSize:14,
    color:'#62442B',
  padding:15,
},

  rectangle: {
    width:335,
    height:172,
    backgroundColor: '#FDF4E7',
    marginTop:30,
    justifyContent:'space-between',
    borderRadius:8,
    marginLeft:10
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
export default Order;