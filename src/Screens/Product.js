import { StyleSheet, Text, View , Image, SafeAreaView, Dimensions, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import React, {useState } from 'react';

const Product = () => { 
  return (
    <View style={styles.background}>
        <View>
        <Image source={require('../../assets/Products/table1.png')} />
        </View>
        <View style = {{padding : 30}}>
            <Text style = {styles.title}>
            Minimal Stand
            </Text>

            <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style = {styles.price}>
                    6,000 PKR
                </Text>
                <View style = {styles.plus}>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                    <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
                </View>
            </View>
            <Text style = {{fontSize: 14, fontFamily: 'NunitoSans-Light', paddingTop: 20,textAlign:'justify'}}>
                Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. 
            </Text>
            <View style = {{flexDirection:'row', justifyContent: 'space-between', paddingTop: 15}}>
            <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 50, height: 50, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/fav.png')}></Image></TouchableOpacity>
            <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Add to Cart</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: '#EEE7DC',
    },
    plus: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button:{
        backgroundColor: '#62442B',
        width: 250,
        height: 50,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:6,
        elevation: 20,
        //for ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8, 
    },
    buttontext:{
        color:'#FFFFFF',
        fontSize:15,
        justifyContent:'center',
        alignSelf:'center',
        fontFamily:'NunitoSans-SemiBold',
      },
      title: {
        fontSize: 24,
        fontFamily: 'Gelasio-Medium',
        color: '#62442B'
      },
      price: {
        fontSize: 30,
        fontFamily: 'NunitoSans-Bold', color: '#62442B'
        
      }
        
});


export default Product;