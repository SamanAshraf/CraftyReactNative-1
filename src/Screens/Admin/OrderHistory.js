import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';
import Icon2  from 'react-native-vector-icons/Entypo';
const OrderHistory =()=>{
 
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
        <Text>Order History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE7DC',
    padding: '5%'
  },
 

});
export default OrderHistory;