import { StyleSheet, Text, View, FlatList, SafeAreaView,TouchableOpacity,Button, Image, ActivityIndicator, Alert} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

const ProductListing = ({navigation}) => {
  const[isLoading, setLoading] = useState(true); 
  const[data, setData] =useState([]);
  const[filter, setFilter] =useState(data);

  const filterProduct = (category) => {
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList);
  }


  
  useEffect(() => {
    const ProductApi = async () =>{
      let componentMounted = true;
      try{
        const res = await fetch('https://fakestoreapi.com/products');
        if(componentMounted){
          const json = await res.json();
          setData(json);
          setFilter(json);
        }
        return () => {
          componentMounted = false;
        }
        
      }catch (e) {
        console.log(e);
        Alert.alert(
          'No Internet Connection',
          'Please check your internet connection.',
        );
      } finally {
        setLoading(false);
      }
    }
    ProductApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) :(
       
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={() =>  setFilter(data)} style={styles.button}><Text>ALL</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => filterProduct("women's clothing")} style={styles.button}><Text>Womens</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => filterProduct("electronics")} style={styles.button}><Text>Electronics</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => filterProduct("jewelery")} style={styles.button}><Text>Jewelery</Text></TouchableOpacity>
        </View>
        <FlatList 
        data={filter}
        initialNumToRender={7}
        keyExtractor={({ id }, index) => id}
          renderItem = {({ item }) => (
            <View style={styles.card}>
              <View style={styles.infoContainer}>
                
                <TouchableOpacity onPress={() => navigation.navigate('ProductsD', {product : item} )}>
                {/* {console.log(item.id)} */}
                <Image style={styles.thumb} source={{uri : item.image}}/>
                </TouchableOpacity>
            <Text>
              {item.title} 
            </Text>
            </View>
            </View>
          )}
          />
          </View>
      )}
    </SafeAreaView>
  )
}

export default ProductListing

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
  },
  infoContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 4,
    marginVertical: 5,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  button:{
    borderWidth:1,
    backgroundColor: 'white',
    padding:5,
    marginVertical:10
  }
})