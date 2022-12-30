import { StyleSheet, Text, View , Image} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
;

const Favorites = () => {
  
  const navigation= useNavigation();

  return (

      <View style={styles.container}>
      
            <Text style={styles.text}>Favorites</Text>
      
      </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62442B',
  },
  container1: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    margin:'auto',
  },
  text: {
    fontSize: 40,
    color:'#FFFFFF',
    fontFamily: 'Gelasio-Medium',
    letterSpacing: 2,
    lineHeight: 51,
  },

});

export default Favorites;