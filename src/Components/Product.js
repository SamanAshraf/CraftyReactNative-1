import { set } from 'firebase/database';
import React,{useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { getStorage, ref, getDownloadURL } from "firebase/storage"; 

export function Product({name, price, image, onPress,onPress1}) {
  const [value,setValue]=useState('https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg');
  
    useEffect(()=>{
    const func= async ()=>{
      const storage = getStorage();
      await getDownloadURL(ref(storage, image)).then((x)=>{
        setValue(x);
      })
    }
    func(); 
  }) 

  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{}}>
        <Image source={{uri:value}} style={{alignSelf:'center',marginTop:'25%', width:157, height:200, borderRadius:12}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}} onPress={onPress1}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>{name}</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>{price}</Text>
        </View>
    </TouchableOpacity>
  );
}
