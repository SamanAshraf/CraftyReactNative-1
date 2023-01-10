import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView,TextInput,Platform,PermissionsAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import { getDatabase, ref, set,push } from "firebase/database";
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker/src';
import React, {useState} from 'react';
import {uploadImage} from './Uploadimages';


const AddProduct =()=>{
  const navigation= useNavigation();
  const categories = ["Chair", "Table", "Lamp", "Bed","ArmChair"];
  const [Title, setTitle] = useState('');
  const [Price, setPrice]= useState(0);
  const [Description, setDescription]= useState('');
  const [Category, setCategory]= useState('');
  const [Quantity, setQuantity]= useState(1);
  const [filePath, setFilePath] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
   
  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    
    };
    try{
      launchImageLibrary(options, response => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }else {
          setFilePath(response.assets[0].uri);
          console.log(filePath);
          uploadImage(filePath);
        }
        
      });
    }catch(error){
      console.log(error);
    }
  };
 
  function writeData() {
    const pId = Math.floor(Math.random() * 100000000) + 100;
    const db = getDatabase();
    const pListRef = ref(db, 'products/');
    const newPRef = push(pListRef);
    set(newPRef, {
      id: pId,
      name: Title,
      price: Price,
      description : Description,
      category : Category,
      quantity : Quantity,
      image: filePath.substring(filePath.lastIndexOf('/')+1),
    });
  }  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}>
        <Icon name='left' color={'#62442B'} size={20}/> 
        </TouchableOpacity>
        <Text style={styles.title}>Add Product</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TextInput style={styles.input} placeholder="Title*" placeholderTextColor={'#62442B'} onChangeText={text=>{setTitle(text)}}/>
      <TextInput style={styles.input}   placeholder="Price*"  placeholderTextColor={'#62442B'} onChangeText={text=>{setPrice(text)}}/>
      <TextInput style={styles.textarea}   placeholder="Description" placeholderTextColor={'#62442B'} onChangeText={text=>{setDescription(text)}}/>
      <View style={{flexDirection:'row',backgroundColor:'#FDF4E7',borderRadius:4, borderColor:'#62442B', borderWidth:1, marginTop:30, width:335,height:70, textAlign:'left'}}>
      <SelectDropdown defaultButtonText={"Select Category"} data={categories} buttonStyle={{width:300, height:66,backgroundColor:'#FDF4E7',borderRadius:4,}}
      buttonTextStyle={{fontSize:16,fontFamily: 'NunitoSans-SemiBold',color:'#62442B',}} 
      renderDropdownIcon={()=>{<Icon name='down' size={30}/>}} 	onSelect={(value,index)=>{
        
        setCategory(value);
        
      }}
     >  
      </SelectDropdown>
      <Icon name='down' size={25} style={{marginTop:20, marginRight:40}}/>
      </View>
      {/* <Image 
          source={{ uri:filePath}} 
          style={{width: 100, height: 100}} /> */}
      <View style={{flexDirection:'row',marginRight:20,marginTop:20}}> 
        <Text style={{color:'#62442B',marginTop:5,marginRight:100}}> Quantity </Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity  style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}} onPress={()=>setQuantity(Quantity+1)}><Icon name='plus' size={15} style={{color:'#62442B'}}></Icon></TouchableOpacity>
        <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> {Quantity} </Text>
        <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}} onPress={()=>{Quantity>=2? setQuantity(Quantity-1): setQuantity(1)}}><Icon name='minus' size={15} style={{color:'#62442B'}}></Icon></TouchableOpacity>
        </View>
        </View>
        
        <TouchableOpacity style={styles.Button1}  onPress={()=> chooseFile()}>
          <Icon3 name='drive-folder-upload' color={'#62442B'} size={30} style={{marginTop:15, marginRight:10}}/>
        <Text style={styles.buttontext1}>Upload Pictures</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>writeData()}style={styles.Button}><Text style={styles.buttontext}>Add Product</Text></TouchableOpacity>
      

      </View>
      </ScrollView>
    
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
      fontFamily: 'NunitoSans-SemiBold',
      color:'black'
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
      fontFamily: 'NunitoSans-SemiBold',
      color:'black'


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