import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home =()=>{
  const navigation= useNavigation();
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/search.png')}/>
        <Text style={styles.title}>CRAFTY</Text>
        <Image source={require('../images/cart.png')}/>
      </View>
        <ScrollView>                 
            <View style={styles.slider}>
                <TouchableOpacity style={styles.box}><Image source={require('../images/star.png')} style={{alignSelf:'center',marginTop:'25%'}}/></TouchableOpacity>
                <TouchableOpacity style={styles.box1}><Image source={require('../images/chair.png')} style={{alignSelf:'center',marginTop:'20%'}}/></TouchableOpacity>
                <TouchableOpacity style={styles.box1}><Image source={require('../images/table.png')} style={{alignSelf:'center',marginTop:'30%'}}/></TouchableOpacity>
                <TouchableOpacity style={styles.box1}><Image source={require('../images/armchair.png')} style={{alignSelf:'center',marginTop:'30%'}}/></TouchableOpacity>
                <TouchableOpacity style={styles.box1}><Image source={require('../images/bed.png')} style={{alignSelf:'center',marginTop:'24%'}}/></TouchableOpacity>
                <TouchableOpacity style={styles.box1}><Image source={require('../images/lamp.png')} style={{alignSelf:'center',marginTop:'20%'}}/></TouchableOpacity>
                </View>
        </ScrollView>
        <View></View>
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
    justifyContent:'space-between',
    marginTop:'5%',
    padding:'1%',
    marginBottom:'5%'
  },
  title :{
    color: '#62442B',
    fontSize: 18,
    fontFamily:'Gelasio-Bold',
    lineHeight:25,
    letterSpacing:2
    
  },
  slider:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'5%',
  },
  box:{
    backgroundColor: '#62442B',
    width:50,
    height:50,
    borderRadius:15,
    marginRight:'5%'
  },
  box1:{
    backgroundColor: '#CEBB9E',
    width:50,
    height:50,
    borderRadius:15,
    marginRight:'5%'
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
export default Home;