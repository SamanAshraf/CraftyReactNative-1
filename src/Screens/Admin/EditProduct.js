import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const EditProduct =()=>{
  const navigation= useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductList")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Edit Product</Text>
      </View>
 
      <View style={{justifyContent:'center',alignItems:'center'}}>   
        <TextInput style={styles.input} placeholder='Black Simple Lamp' placeholderTextColor={'#62442B'}/>
        <TextInput style={styles.input}   placeholder='4000'  placeholderTextColor={'#62442B'}/>
        <TextInput style={styles.input}   placeholder='Minimal Stand is made of by natural wood...'  placeholderTextColor={'#62442B'}/>
        <TextInput style={styles.input}   placeholder='Lamp'  placeholderTextColor={'#62442B'}/>
        <TextInput style={styles.input} placeholder='04' placeholderTextColor={'#62442B'}/>
        <TextInput style={styles.input}   placeholder='pic.jpg, pic2.jpg'  placeholderTextColor={'#62442B'}/>
      </View>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Confirm Edit</Text></TouchableOpacity>
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
        marginTop:20,
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
  buttontext:{
    color:'#FFFFFF',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
  },

});
export default EditProduct;