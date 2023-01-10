import { StyleSheet, Text, View , Image, Pressable, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/EvilIcons';
const ProductList =()=>{
  const navigation= useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.title}>Products</Text>
        
      </View>
      <TouchableOpacity style={styles.addbutton} onPress={()=>navigation.navigate('AddProduct')}>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center',marginTop:'2%'}}>
        <View style={styles.adddesign}><Icon name="box" size={18} color={'#FFFFFF'}/></View>
        <Text style={styles.titlee}>Add Product</Text>
        </View>
       </TouchableOpacity>
  
            
 <ScrollView showsVerticalScrollIndicator={false}>
          
    
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('EditProduct')} >
        <View style={{marginRight:10}}>
        <Image source={require('../../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
                <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
            </View>
            <TouchableOpacity style={{marginTop:10, marginLeft:5}}>
                <Icon1 name="trash" size={30} color={'#62442B'}/>
            </TouchableOpacity>
            
        </View>
    
          
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
                <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
            </View>
            <TouchableOpacity style={{marginTop:10, marginLeft:5}}>
                <Icon1 name="trash" size={30} color={'#62442B'}/>
            </TouchableOpacity>
            
        </View>
        </View>
      

        <View style={{marginRight:10}}>
        <Image source={require('../../images/chairrr.png')} style={{alignSelf:'center',marginTop:'25%', borderRadius: 10}}/>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
                <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
            </View>
            <TouchableOpacity style={{marginTop:10, marginLeft:5}}>
                <Icon1 name="trash" size={30} color={'#62442B'}/>
            </TouchableOpacity>
            
        </View>
        </View>

        <View>
        <Image source={require('../../images/simpledesk.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
                <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
            </View>
            <TouchableOpacity style={{marginTop:10, marginLeft:5}}>
                <Icon1 name="trash" size={30} color={'#62442B'}/>
            </TouchableOpacity>
            
        </View>          
        </View>
      </View> 
              
          
        </ScrollView>         
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%'
  },
  header: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'5%',
    padding:'1%',
    marginBottom:'5%'
  },
  addbutton:{
    width:324,
    height:44,
    backgroundColor:'#FDF4E7',
    borderRadius:16,
    alignSelf:'center',
    marginTop:'5%'
  },
  adddesign:{
    width:29,
    height:29,
     backgroundColor:'#62442B',
     borderRadius:50,
     justifyContent:'center',
     alignItems:'center',
  },
  title :{
    color: '#62442B',
    fontSize: 18,
    fontFamily:'Gelasio-Bold',
    lineHeight:25,
    letterSpacing:2
    
  },
  titlee:{
    fontFamily:'NunitoSans-Regular',
    fontSize:13,
    color:'#62442B',
    marginLeft:7,
    letterSpacing:2
  },
  box:{
    width:50,
    height:50,
    borderRadius:15,
    alignSelf:'center',
    justifyContent:'center'
  },
  box1:{
  
    width:50,
    height:50,
    borderRadius:15,
    alignSelf:'center',
    justifyContent:'center'
  },
  Button:{
    backgroundColor: '#62442B',
    width: 159,
    height: 54,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'66%',
    borderRadius:6,
    elevation: 20,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext:{
    color:'#FFFFFF',
    fontSize:18,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'Gelasio-Medium',
  }

});
export default ProductList;