import { StyleSheet, Text, View , Image} from 'react-native';


const ProfilingHeader = () => {
  
  return (

    <View style={styles.container1}>
        <View style={styles.line}></View>
        <View><Image 
            source={require('../images/logo.png')}  
            style={styles.image} 
        /></View>
        <View style={styles.line}></View>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:40,
        paddingRight:40,
        marginTop:'7%',
      },
      line: {
        width: 105,
        borderBottomWidth: 1,
        borderColor:'#CEBB9E',
        marginBottom:'8%',
      },
      image:{
        marginTop:'24%',
      },


});

export default ProfilingHeader;