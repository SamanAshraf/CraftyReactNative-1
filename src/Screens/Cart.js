import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView, Pressable, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../CartContext';
import React, {useContext, useState,useEffect} from 'react';
import { getProduct } from '../ProductsService';
const Cart =({navigation})=>{
  
  const {items, setItems, getItemsCount, getTotalPrice, setItemQuantity} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View>
        { total!==0 ? 
        <View style={{ marginBottom:'5%',marginTop:'15%'}}>
        <View style = {{ flexDirection:'row', justifyContent:'space-around'}}>
        <Text style= {{fontFamily:'NunitoSans-Bold', color:'#62442B', fontSize: 20, marginBottom:20,marginRight:20}}> Total: </Text>
        <Text style= {{fontFamily:'NunitoSans-Bold', color:'#62442B', fontSize: 20, marginBottom:20, marginLeft:20}}>{total} PKR</Text>
        </View>
        <TouchableOpacity style={styles.Button}><Text style={styles.buttontext}>Checkout</Text></TouchableOpacity>
        </View>: <View style={{justifyContent:'center',alignSelf:'center',marginTop:'70%', alignItems:'center'}}>
          <Icon1 name='shopping-cart' size={70} color={'#62442B'}/>
          <Text style={{fontFamily:'Gelasio-Bold', color:'#62442B', fontSize: 25,marginTop:15}}>Your Cart is Empty</Text>
          </View>
      }
      </View>
       
      
   );
 }
 function renderItem({item}) {
  return (
    <View style = {styles.border}>
    <View>
      <Image source={item.product.image} style = {{borderRadius:10,width:100,height:100}}/>
      </View>
      <View style= {styles.content}>
      <View style = {{marginLeft:20}}>
          <Text style = {styles.Title}>
              {item.product.name}
          </Text>
          <Text style = {styles.subtite}>
              {item.product.price}
          </Text>
          <View style = {styles.plus}>
                  <TouchableOpacity onPress={()=>{
                    const product = getProduct(item.id);
                    setItems((prevItems) => {
                          return prevItems.map((item1) => {
                            if(item1.id == item.id) {
                              item1.qty++;
                              item1.totalPrice += product.price;
                            }
                            return item1;
                          });
                    });;
                  }} style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                  <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> {item.qty} </Text>
                  
                  <TouchableOpacity onPress={()=>{
                    const product = getProduct(item.id);
                    setItems((prevItems) => {
                          return prevItems.map((item1) => {
                            if(item1.id == item.id && item1.qty>0) {
                              item1.qty--;
                              item1.totalPrice -= product.price;
                            }
                            if(item.qty===0){
                              const newItems = items.filter((abc) => abc.id !== item.id)
                              setItems(newItems);
                            }
                            return item1;
                          });
                    });;
                  }}style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
          </View>
      </View>
      <View style = {{justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          const newItems = items.filter((abc) => abc.id !== item.id)
          setItems(newItems);
        }}><Image source={require('../../assets/Favorites/cross.png')} style= {{marginLeft:5,marginTop:-50}}/></TouchableOpacity>
      </View>
      </View>
    </View>

  );
}
  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'flex-start', marginLeft:5, marginTop:2}}><Icon name="left" color={'#62442B'} size={20}/></TouchableOpacity>
        
        <Text style={styles.title}>My Cart</Text>
      </View>

      <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />  
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
    flexDirection:'row',
    width:'100%',
  
  },
  title :{
    color: '#62442B',
    fontSize: 16,
    fontFamily:'Gelasio-Bold',
    letterSpacing:2,
    marginLeft:120  
  },

  Button:{
    backgroundColor: '#62442B',
    width: 340,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:6,
    elevation: 5,
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