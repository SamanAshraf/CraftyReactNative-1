import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';

const Cart =()=>{

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Cart/back.png')}/>
        <Text style={styles.title}>My Cart</Text>
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
            <View style = {styles.plus}>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                    <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
            </View>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5,marginTop:-70}}/>
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
            <View style = {styles.plus}>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                    <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
            </View>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5,marginTop:-70}}/>
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
            <View style = {styles.plus}>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                    <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
            </View>
        </View>
        <View style = {{justifyContent:'center'}}>
        <Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5, marginTop:-70}} />
        </View>
        </View>
      </View>
      <View style = {{justifyContent:'space-between', flexDirection:'row', marginTop:100}}>
      <Text style= {{fontFamily:'NunitoSans-Bold', color:'#62442B', fontSize: 20, marginBottom:20}}> Total: </Text>
      <Text style= {{fontFamily:'NunitoSans-Bold', color:'#62442B', fontSize: 20, marginBottom:20}}>95,000 PKR</Text>
      </View>
      <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Checkout</Text></TouchableOpacity>
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
    width: 340,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
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
  },
  plus: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between'
},

});
export default Cart;