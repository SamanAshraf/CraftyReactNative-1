import { StyleSheet, Text, View , Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/EvilIcons';
import { AdminProduct } from '../../Components/AdminProduct';

import { getDatabase, ref, onValue, child, get, remove } from "firebase/database";
import { db } from '../../firebase';
const ProductList =()=>{
  const navigation= useNavigation();
  const [dataa, setDataa] = useState([]);
   
  const getDataa=()=>{
    //const db = getDatabase();
    const dbRef = ref(db, '/products');
    let count =0;
    const array =[];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        
        array[count]=childData;
        count =count +1;
      });
      setDataa(array);
    }, {
      onlyOnce: true
    });
  }
 
  findProduct=(id)=>{
    return dataa.find((p) => (p.id == id))
  }/* 
  function renderProduct({item: product}) {
    return (
      <AdminProduct {...product} 
      onPress={() => {
        navigation.navigate('EditProduct', {
          productId: product.id, data:dataa});
      }} 
      onPress1={()=>{
        
      }}
      />
    );
  } */
  const deleteData=(id)=>{
    const dbRef = ref(db, '/products/');
    
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if(childData.id===id){
          console.log(childKey);
          const dbRef1 = ref(db, '/products/'+childKey);
          remove(dbRef1).then(()=>{
            alert('Product Removed!');
          })
        }
        
      });
      //setDataa(array);
    }, {
      onlyOnce: true
    });
    

   // admin.ref(`/users/${userid}`).remove()

  } 
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    setTimeout(() => {
      getDataa();
      console.log('Data retrived');
  }, 1000);
  },[dataa]); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.title}>Products</Text>
        
      </View>
      <TouchableOpacity style={styles.addbutton} onPress={()=>navigation.navigate('AddProduct')}>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center',marginTop:'2%'}}>
        <View style={styles.adddesign}><Icon name="box" size={18} color={'#FFFFFF'}/></View>
        <Text style={styles.titlee}>Add Product</Text>
        </View>
       </TouchableOpacity>
  
            
 <ScrollView showsVerticalScrollIndicator={false}>
          
    
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between',marginLeft:10,marginRight:10}}>

        {dataa.map((item,key)=>(
          <AdminProduct  name={item.name} price={item.price} image={item.image}
        onPress={() => {
        navigation.navigate('EditProduct', {
          productId: item.id, title1:item.name, price1: item.price, description1: item.description,
           category1:item.category, quantity1:item.quantity });
        }} 
        onPress1={()=>{
        deleteData(item.id);
      }}
      />
        ))}
                
        
        </View> 
              
          
        </ScrollView>         
        
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
    justifyContent:'center',
    marginTop:'5%',
    padding:'1%',
    marginBottom:'5%'
  },
  addbutton:{
    width:324,
    height:44,
    backgroundColor:'#FDF4E7',
    borderRadius:16,
    alignSelf:'center',
    marginTop:'5%'
  },
  adddesign:{
    width:29,
    height:29,
     backgroundColor:'#62442B',
     borderRadius:50,
     justifyContent:'center',
     alignItems:'center',
  },
  title :{
    color: '#62442B',
    fontSize: 18,
    fontFamily:'Gelasio-Bold',
    lineHeight:25,
    letterSpacing:2
    
  },
  titlee:{
    fontFamily:'NunitoSans-Regular',
    fontSize:13,
    color:'#62442B',
    marginLeft:7,
    letterSpacing:2
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
export default ProductList;