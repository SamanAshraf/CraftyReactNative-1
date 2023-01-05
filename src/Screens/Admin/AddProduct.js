import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView,TextInput,useState} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';


const AddProduct =()=>{
  const navigation= useNavigation();
  const countries = ["Chair", "Table", "Lamp", "Bed"]
  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Add Product</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TextInput style={styles.input} placeholder="Title*" placeholderTextColor={'#62442B'}/>
      <TextInput style={styles.input}   placeholder="Price*"  placeholderTextColor={'#62442B'}/>
      <TextInput style={styles.textarea}   placeholder="Description" placeholderTextColor={'#62442B'} />
      <View style={{flexDirection:'row',backgroundColor:'#FDF4E7',borderRadius:4, borderColor:'#62442B', borderWidth:1, marginTop:30, width:335,height:70, textAlign:'left'}}>
      <SelectDropdown defaultButtonText={"Select Category"} data={countries} buttonStyle={{width:300, height:66,backgroundColor:'#FDF4E7',borderRadius:4,}}
      buttonTextStyle={{fontSize:16,fontFamily: 'NunitoSans-SemiBold',color:'#62442B',}}
      renderDropdownIcon={()=>{<Icon name='down' size={30}/>}} >
      
      </SelectDropdown>
      <Icon name='down' size={25} style={{marginTop:20, marginRight:40}}/>
      </View>
      
      <View style={{flexDirection:'row',marginRight:20,marginTop:20}}> 
        <Text style={{color:'#62442B',marginTop:5,marginRight:100}}> Quantity </Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity  style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Icon name='plus' size={15} style={{color:'#62442B'}}></Icon></TouchableOpacity>
        <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
        <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Icon name='minus' size={15} style={{color:'#62442B'}}></Icon></TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={styles.Button1}><Icon3 name='drive-folder-upload' color={'#62442B'} size={30} style={{marginTop:15, marginRight:10}}/><Text style={styles.buttontext1}>Upload Pictures</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Add Product</Text></TouchableOpacity>
      

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        width:335,
        height: 66,
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
    marginTop:35,

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
  plus: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},
Button1:{
    
    width: 335,
    height:66,
    justifyContent:'center',
    alignSelf:'center',
    borderStyle:'dashed',
    borderWidth:1,
    marginTop:30,
    borderRadius:10,
    flexDirection:'row',

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext1:{
    color:'#62442B',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-Bold',
  },

});
export default AddProduct;