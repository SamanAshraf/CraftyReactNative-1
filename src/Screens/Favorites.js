import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';

const Favorites =()=>{

    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Icon1 name='search-outline' color={'#62442B'} size={25} />
        <Text style={styles.title}>Favorites</Text>
        <Icon name='shopping-cart' color={'#62442B'} size={25}/>
      </View>
      <View style = {styles.border}>
      <View>
        <Image source={require('../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style= {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5}}/>
        <TouchableOpacity style = {styles.cart}><Image source={require('../../assets/Favorites/cart.png')}></Image></TouchableOpacity>
        </View>
        </View>
      </View>

      <View style = {styles.border}>
      <View>
        <Image source={require('../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style= {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5}}/>
        <TouchableOpacity style = {styles.cart}><Image source={require('../../assets/Favorites/cart.png')}></Image></TouchableOpacity>
        </View>
        </View>
      </View>

      <View style = {styles.border}>
      <View>
        <Image source={require('../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style=  {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5}} />
        <TouchableOpacity style = {styles.cart}><Image source={require('../../assets/Favorites/cart.png')}></Image></TouchableOpacity>
        </View>
        </View>
      </View>
      
      <View style = {styles.border}>
      <View>
        <Image source={require('../../assets/Favorites/pic1.png')} style = {{borderRadius:10}}/>
        </View>
        <View style=  {styles.content}>
        <View style = {{marginLeft:20}}>
            <Text style = {styles.Title}>
                Coffee Table
            </Text>
            <Text style = {styles.subtite}>
                12,000 pkr
            </Text>
        </View>
        <View>
        <Image source={require('../../assets/Favorites/cross.png')}style= {{marginLeft:5}}/>
        <TouchableOpacity style = {styles.cart}><Image source={require('../../assets/Favorites/cart.png')}></Image></TouchableOpacity>
        </View>
        </View>
      </View>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Add to Cart</Text></TouchableOpacity>
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
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    lineHeight:25,
    letterSpacing:2
    
  },

  Button:{
    backgroundColor: '#62442B',
    width: 330,
    height: 50,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 20,
    marginTop: -50,

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
  border: {
    flexDirection:'row', 
    marginTop:30, 
    borderBottomWidth: 1,
    borderBottomColor: '#CEBB9E',
    padding:10
  },
  cart:{
    backgroundColor: '#CEBB9E',
    width: 34,
    height: 34,
    marginTop:40, 
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:6,
    elevation:6
  },
  Title:{
    color: '#62442B',
    fontSize: 14,
    fontFamily: 'NunitoSans-SemiBold',
  },
  subtite:{
  color: '#CEBB9E', 
  fontSize: 16,
  fontFamily: 'NunitoSans-SemiBold'
  },
  
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1
  }

});
export default Favorites;