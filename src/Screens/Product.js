import { StyleSheet, Text, View , Image, SafeAreaView, Dimensions, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState ,useContext} from 'react';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { getProduct } from '../ProductsService';
import { CartContext } from '../CartContext';
import { getStorage, ref, getDownloadURL } from "firebase/storage"; 

const Product = ({route}) => { 
    const navigation= useNavigation();
    const { productId,data } = route.params;
    const [product, setProduct] = useState({});
    const [value,setValue]=useState('https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg');
  
    const {addItemToCart} = useContext(CartContext);
    const findProduct=()=>{
      data.find((product) => (product.id == id))
    }
    useEffect(() => {
      setProduct(data.find((product) => (product.id == productId)));
      const func= async ()=>{
        const storage = getStorage();
        await getDownloadURL(ref(storage, product.image)).then((x)=>{
          setValue(x);
        })
      }
      func(); 
    });
  
    function onAddToCart() {
      addItemToCart(product.id);
    }
  
    return (
    <View style={styles.background}>
        <View style={{width:'100%', height:470}}>
        <TouchableOpacity style={styles.backbutton} onPress={()=>navigation.goBack()}><Icon1 name="left" color={'#62442B'} size={20}/></TouchableOpacity>
        <Swiper dotStyle={{width:40, height:5}} activeDotStyle={{width:40, height:5}} dotColor={'#F0F0F0'} activeDotColor={'#303030'}>
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={{uri: value}} style={{width:400, height:480}} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={{uri: value}} style={{width:400, height:480}}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={{uri: value}}style={{width:400, height:480}} />
        </View>
        </Swiper>
        
        </View>
        
        <View style = {{padding : 30}}>
            <Text style = {styles.title}>
            {product.name}
            </Text>

            <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style = {styles.price}>
                    {product.price} PKR
                </Text>
                {/* <View style = {styles.plus}>
                    <TouchableOpacity  style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/plus.png')}></Image></TouchableOpacity>
                    <Text style = {{marginTop: 5, fontFamily: 'NunitoSans-SemiBold', marginRight: 7, marginLeft:7, color: '#62442B',letterSpacing: 2}}> 01 </Text>
                    <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 30, height: 30, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Image source={require('../../assets/Products/minus.png')}></Image></TouchableOpacity>
                </View> */}
            </View>
            <Text style = {{fontSize: 14, fontFamily: 'NunitoSans-Light', color:'#606060',paddingTop: 20,textAlign:'justify'}}>
                {product.description}
            </Text>
            <View style = {{flexDirection:'row', justifyContent: 'space-between', paddingTop: 15}}>
            <TouchableOpacity style = {{backgroundColor: '#CEBB9E', width: 50, height: 50, justifyContent: 'center', alignItems:'center', borderRadius:6, elevation:6}}><Icon name="bookmark-o" size={25} color={'#62442B'}/></TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={onAddToCart}><Text style={styles.buttontext}>Add to Cart</Text></TouchableOpacity>
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
        
      },
      backbutton:{
        width:40, height:40,
        backgroundColor:'#FDF4E7', 
        borderRadius:6,
        position:'absolute',
        top:40,
        left:40,
        zIndex: 999,
        justifyContent:'center',
        alignItems:'center'
      }
        
});


export default Product;