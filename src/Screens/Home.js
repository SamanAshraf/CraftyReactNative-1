import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import Icon1  from 'react-native-vector-icons/Ionicons';
const Home =()=>{
  const navigation= useNavigation();
 
  
  const [data, setdata] = React.useState('1');
  const [col, setcolor] = useState('#CEBB9E');
  const [col1, setcolor1] = useState('#62442B');
  const [col2, setcolor2] = useState('#CEBB9E');
  const [col3, setcolor3] = useState('#CEBB9E');
  const [col4, setcolor4] = useState('#CEBB9E');
  const [col5, setcolor5] = useState('#CEBB9E');
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Icon1 name='search-outline' color={'#62442B'} size={25} />
        <Text style={styles.title}>CRAFTY</Text>
        <Icon name='shopping-cart' color={'#62442B'} size={25}/>
        
      </View>
      
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
                                                                                                  setcolor5('#CEBB9E');}}>
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
                <TouchableOpacity style={styles.box1}><Image source={require('../images/lamp.png')} style={{alignSelf:'center'}}/></TouchableOpacity>
                <Text style={{marginTop:5, color:'#CEBB9E',paddingLeft:7}}>Lamp</Text>   
                </View>
 
          

            </ScrollView>

  
            
 <ScrollView showsVerticalScrollIndicator={false}>
          
      {data === '1'?
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
      

        <View style={{marginRight:10}}>
        <Image source={require('../images/chairrr.png')} style={{alignSelf:'center',marginTop:'25%', borderRadius: 10}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>

        <View>
        <Image source={require('../images/simpledesk.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
      </View> 
      : data==='2' ? <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
        </View>
        : data==='3' ?
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
        </View>
        : data==='4'?
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>

        </View>
         : data==='5'?
         <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
        </View>            
         :
         <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <View style={{marginRight:10}}>
        <Image source={require('../images/lampp.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
        <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>5,000 PKR</Text>
        </View>
        </TouchableOpacity>
        
        <View>
        <Image source={require('../images/minimalstand.png')} style={{alignSelf:'center',marginTop:'25%'}}/>
        <TouchableOpacity style={{position:'absolute',top:195,left:115}}><Image source={require('../images/cart1.png')} /></TouchableOpacity>
          <Text style={{color:'#606060',fontFamily:'NunitoSans-Regular',marginTop:5}}>Black Simple Lamp</Text>
          <Text style={{color:'#62442B',fontFamily:'NunitoSans-Bold',marginTop:5}}>4,000 PKR</Text>
        </View>
        </View>
           }         
          
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