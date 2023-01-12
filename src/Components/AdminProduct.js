import { set } from 'firebase/database';
import React,{useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getStorage, ref, getDownloadURL } from "firebase/storage"; 
import Icon1  from 'react-native-vector-icons/EvilIcons';

export function AdminProduct({name, price, image, onPress,onPress1}) {
const [value,setValue]=useState('https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg');
  
    useEffect(()=>{
    const func= async ()=>{
      const storage = getStorage();
      await getDownloadURL(ref(storage, image)).then((x)=>{
        console.log(x);
        setValue(x);
      })
    }
    func(); 
  }) 

  return (
    <TouchableOpacity onPress={onPress} >
        <View >
        <Image source={{uri:value}} style={{alignSelf:'center',marginTop:'25%',width:157, height:200, borderRadius:12}}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
                <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>{name}</Text>
                <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>{price} PKR</Text>
            </View>
            <TouchableOpacity style={{marginTop:10}} onPress={onPress1}>
                <Icon1 name="trash" size={30} color={'#62442B'}/>
            </TouchableOpacity>
            
        </View>
          
        </View>
        </TouchableOpacity>        
        
  );
}
