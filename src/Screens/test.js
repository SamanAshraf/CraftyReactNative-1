import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView,TextInput,Platform,PermissionsAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
 import ImagePicker,{
  launchCamera,
  launchImageLibrary, showImagePicker
} from 'react-native-image-picker/src';
 
//import ImagePicker from 'react-native-image-picker';
import React, {useState} from 'react';


const test =()=>{
  
  const [filePath, setFilePath] = useState('kkk');
   
  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      
    };
    
      launchImageLibrary(options, (response) => {
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
        }
        setFilePath(response.uri);
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        
        
      });
  };
 
    return (
    <View style={styles.container}>
      
      <Image 
          source={{ uri:'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg'}} 
          style={{width: 100, height: 100}} />

    <TouchableOpacity >
        <View style={{marginRight:10}}>
        <Image source={{uri:'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg'}} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>200</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>2000</Text>
        </View>
    </TouchableOpacity>
{/*         
        <TouchableOpacity style={styles.Button1}  onPress={()=> chooseFile()}>
          <Icon3 name='drive-folder-upload' color={'#62442B'} size={30} style={{marginTop:15, marginRight:10}}/>
        <Text style={styles.buttontext1}>Upload Pictures</Text></TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%'
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
    
  },
  buttontext1:{
    color:'#62442B',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-Bold',
  },

});
export default test;