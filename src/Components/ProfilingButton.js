import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';


const ProfilingButton = ({ onPress, title }) => {
  
  return (

    <View style={styles.container1}>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.buttontext}>{title}</Text></TouchableOpacity>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
    button:{
        marginTop:'13%',
        width: 285,
        height:50,
        backgroundColor:'#62442B',
        borderRadius:6,
        elevation: 20,
      },
      buttontext:{
        fontSize:18,
        color: '#FFFFFF',
        justifyContent:"center",
        alignSelf: "center",
        fontFamily: 'NunitoSans-SemiBold',
        marginTop:'5%',
        letterSpacing: 3,
      }


});

export default ProfilingButton;