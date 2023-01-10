import { StyleSheet, Text, View , Image, Pressable, TouchableOpacity, ScrollView, FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';
import { Product } from '../Components/Product';
import { getProducts, getProduct, getProductC } from '../ProductsService';
import { CartContext } from '../CartContext';

const Home =()=>{
  const navigation= useNavigation();
 
  const [data, setdata] = React.useState('1');
  const [col, setcolor] = useState('#CEBB9E');
  const [col1, setcolor1] = useState('#62442B');
  const [col2, setcolor2] = useState('#CEBB9E');
  const [col3, setcolor3] = useState('#CEBB9E');
  const [col4, setcolor4] = useState('#CEBB9E');
  const [col5, setcolor5] = useState('#CEBB9E');
  const [dataa, setDataa] = useState([]);
  const [key, setKey] = useState();
  
  const {addItemToCart,setItems} = useContext(CartContext);
  

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('Product', {
          productId: product.id, data:dataa});
      }} 
      onPress1={()=>{
        const product1 = findProduct(product.id);
          setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == product.id));
            let id =product.id;
            if(!item) {
              //console.log(product1.price)
                return [...prevItems, {
                    id,
                    qty: 1,
                    product,
                    
                    totalPrice: product1.price 
                }];
            }
            else { 
                return prevItems.map((item) => {
                  if(item.id == id) {
                    item.qty++;
                    item.totalPrice += product1.price;   
                  }
                  return item;
                });
            }
          });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    setTimeout(() => {
      getDataa();
      setProducts(dataa);
      console.log('Data retrived');
  }, 1000);
    setProducts(dataa);
  },[dataa]); 
  // alpha101
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Icon1 name='search-outline' color={'#62442B'} size={25} />
        <Text style={styles.title}>CRAFTY</Text>
        <Pressable onPress={()=>navigation.navigate('Cart')}><Icon name='shopping-cart' color={'#62442B'} size={25}/></Pressable>
        
        
      </View>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <View style={{marginRight:15}}>
              <TouchableOpacity style={{...styles.box, backgroundColor:col1 }} onPress={() => { setdata('1'); 
                                                                                                setcolor('#CEBB9E');
                                                                                                setcolor1('#62442B');
                                                                                                setcolor2('#CEBB9E');
                                                                                                setcolor3('#CEBB9E');
                                                                                                setcolor4('#CEBB9E');
                                                                                                setcolor5('#CEBB9E');}}>
              <Image source={require('../images/star.png')} style={{alignSelf:'center',justifyContent:'center'}}/>
              </TouchableOpacity>
              <Text style={{marginTop:5, color:col1}}>Popular</Text>                
            </View>
            <View style={{marginRight:15}}>
            <TouchableOpacity style={{...styles.box1, backgroundColor: col}} onPress={() => { setdata('2'); 
                                                                                              setcolor('#62442B');
                                                                                              setcolor1('#CEBB9E');
                                                                                              setcolor2('#CEBB9E');
                                                                                              setcolor3('#CEBB9E');
                                                                                              setcolor4('#CEBB9E');
                                                                                              setcolor5('#CEBB9E');
                                                                                              }}>
              <Image source={require('../images/chair1.png')} style={{alignSelf:'center'}}/></TouchableOpacity>
            <Text style={{marginTop:5, color:col,paddingLeft:10}}>Chair</Text>   
            </View>
            <View style={{marginRight:15}}>
            <TouchableOpacity style={{...styles.box1, backgroundColor:col2}} onPress={() => { setdata('3'); 
                                                                                              setcolor('#CEBB9E');
                                                                                              setcolor2('#62442B');
                                                                                              setcolor1('#CEBB9E');
                                                                                              setcolor3('#CEBB9E');
                                                                                              setcolor4('#CEBB9E');
                                                                                              setcolor5('#CEBB9E');}}>
            <Image source={require('../images/table1.png')} style={{alignSelf:'center'}}/></TouchableOpacity>
            <Text style={{marginTop:5, color:col2,paddingLeft:8}}>Table</Text>                
            </View>
            <View style={{marginRight:10}} >
            <TouchableOpacity style={{...styles.box1, backgroundColor:col3}} onPress={() => { setdata('4'); 
                                                                                              setcolor('#CEBB9E');
                                                                                              setcolor3('#62442B');
                                                                                              setcolor1('#CEBB9E');
                                                                                              setcolor2('#CEBB9E');
                                                                                              setcolor4('#CEBB9E');
                                                                                              setcolor5('#CEBB9E');}}>
            <Image source={require('../images/armchair1.png')} style={{alignSelf:'center'}}/></TouchableOpacity>
            <Text style={{marginTop:5, color:col3}}>Armchair</Text>   
            </View>
            <View style={{marginRight:10}}>
            <TouchableOpacity style={{...styles.box1,backgroundColor:col4}} onPress={() => { setdata('5'); 
                                                                                              setcolor('#CEBB9E');
                                                                                              setcolor4('#62442B');
                                                                                              setcolor1('#CEBB9E');
                                                                                              setcolor3('#CEBB9E');
                                                                                              setcolor2('#CEBB9E');
                                                                                              setcolor5('#CEBB9E');}}>
              <Image source={require('../images/bed1.png')} style={{alignSelf:'center'}}/></TouchableOpacity>
            <Text style={{marginTop:5, color:col4,paddingLeft:11}}>Bed</Text>   
            </View>
            <View style={{marginRight:10}}>
            <TouchableOpacity style={{...styles.box1,backgroundColor:col5}} onPress={() => { setdata('6'); 
                                                                                              setcolor('#CEBB9E');
                                                                                              setcolor4('#CEBB9E');
                                                                                              setcolor1('#CEBB9E');
                                                                                              setcolor3('#CEBB9E');
                                                                                              setcolor2('#CEBB9E');
                                                                                              setcolor5('#62442B');}}><Image source={require('../images/lamp1.png')} style={{alignSelf:'center'}} /></TouchableOpacity>
            <Text style={{marginTop:5, color:col5,paddingLeft:7}}>Lamp</Text>   
            </View>


        </ScrollView>
      </View>
                    
      {data === '1'?
        
        <View style={{height:'80%', width:'100%'}}>
            
          <FlatList
            contentContainerStyle={styles.productsListContainer}
          keyExtractor={(item) => item.id.toString()}
          data={products}
          renderItem={renderProduct}
            />  
        </View> 
      : data==='2' ? 
        
      <View style={{flexDirection:'row',height:'80%'}}>
            
      <FlatList
        contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products.filter((product) => (product.category === 'Chair'))}
      renderItem={renderProduct}
        />  
      </View> 
      : data==='3' ?
      <View style={{flexDirection:'row',height:'80%'}}>
            
        <FlatList
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products.filter((product) => (product.category === 'Table'))}
        renderItem={renderProduct}
          />  
      </View> 
        : data==='4'?
        
        <View style={{flexDirection:'row',height:'80%'}}>
            
          <FlatList
            contentContainerStyle={styles.productsListContainer}
          keyExtractor={(item) => item.id.toString()}
          data={products.filter((product) => (product.category === 'ArmChair'))}
          renderItem={renderProduct}
            />  
        </View> 
         : data==='5'?
         
        <View style={{flexDirection:'row',height:'80%'}}>
            
        <FlatList
          contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products.filter((product) => (product.category === 'Bed'))}
        renderItem={renderProduct}
          />  
        </View>             
         :data==='6'?
         <View style={{flexDirection:'row',height:'80%'}}>
             
         <FlatList
           contentContainerStyle={styles.productsListContainer}
         keyExtractor={(item) => item.id.toString()}
         data={products.filter((product) => (product.category === 'Lamp'))}
         renderItem={renderProduct}
           />  
         </View>: null
           }                    
        
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
    justifyContent:'space-between',
    marginTop:'5%',
  },
  box:{
    width:50,
    height:50,
    borderRadius:15,
    alignSelf:'center',
    justifyContent:'center'
  },
  box1:{
  
    width:50,
    height:50,
    borderRadius:15,
    alignSelf:'center',
    justifyContent:'center'
  },
  productsListContainer:{
    flexDirection:'row',
    marginLeft:15,
    flexWrap:'wrap'
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