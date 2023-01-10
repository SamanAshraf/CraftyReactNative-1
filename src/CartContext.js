import React, {createContext, useState} from 'react';
import { getProduct } from './ProductsService';
import { getDatabase, ref, onValue} from "firebase/database";
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  const [dataa, setDataa] = useState([]);
  
  getDataa=()=>{
    const db = getDatabase();
    const dbRef = ref(db, '/products');
    let count =0;
    const array =[];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        array[count]=childData;
        console.log(array[count]);
        console.log(count);
        count =count +1;
        
      });
      setDataa(array);
    }, {
      onlyOnce: true
    });
  }
  findProduct=(id)=>{
    return dataa.find((p) => (p.id == id))
  }

  function addItemToCart(id) {
    const product = findProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}
 
function setItemQuantity(id){
  const product = findProduct(id);
    setItems((prevItems) => {
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
    });;
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, setItemQuantity}}>
      {props.children}
    </CartContext.Provider>
  );
}