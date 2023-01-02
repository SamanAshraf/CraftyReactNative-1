import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
export function Product({name, price, image, onPress,onPress1}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{marginRight:10}}>
        <Image source={image} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}} onPress={onPress1}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>{name}</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>{price}</Text>
        </View>
        </TouchableOpacity>
  );
}
