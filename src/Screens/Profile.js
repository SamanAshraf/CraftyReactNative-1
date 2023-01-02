import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Profile =()=>{
  const navigation= useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Cart/back.png')}/>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center',margin:30}}>
        <Image source={require('../../assets/Profile/profile.png')} style ={{borderRadius:200}}/>
        <View style= {{marginLeft:20}}>
          <Text style = {{fontFamily:'NunitoSans-Bold', fontSize:20,color:'#62442B'}}>Saman Ashraf</Text>
          <Text style = {{fontFamily:'NunitoSans-Regular', fontSize:14,color:'#62442B'}}>Saman.ashraf@gmail.com</Text>
        </View>
      </View>
      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          My orders
        </Text>
        <Text style = {styles.subtitle}>
          Already have 10 orders
        </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Shipping Adresses
        </Text>
        <Text style = {styles.subtitle}>
          Adresses
        </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Shipping")}>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Saved
        </Text>
        <Text style = {styles.subtitle}>
          Saved products
        </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>

      <View style={styles.rectangle}> 
        <View>
        <Text style= {styles.Title}>
          Setting
        </Text>
        <Text style = {styles.subtitle}>
          Password
        </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/Profile/next.png')}/>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}><Image source={require('../../assets/Profile/Logout.png')}/>  Logout</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize:18,
    color:'#62442B'
  },
  subtitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize:12,
    color:'#62442B'

  },
  rectangle: {
    width:335,
    height:80,
    backgroundColor: '#FDF4E7',
    marginTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:15

  },
  container: {
    flex: 1,
    backgroundColor:'#EEE7DC',
    padding: '5%'
  },
  header: {
    marginTop:'5%',
  
  },
  title :{
    color: '#62442B',
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    letterSpacing:2,
    textAlign:'center',
    marginTop:-20
  },

  Button:{
    backgroundColor: '#62442B',
    width: 285,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
    marginTop:60,

    //for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    
  },
  buttontext:{
    color:'#FFFFFF',
    fontSize:16,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'NunitoSans-SemiBold',
  },

});
export default Profile;