import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');

  //fetching Login
  const LoginApi = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const json = await response.json();
      console.log('jsonvalue', json[0].username);
      if (response.status === 200) {
        for(let i = 0; i < json.length; i++) {
          // console.log('j', uname);
          if (
            json[i].username.toString() === uname &&
            json[i].password.toString() === password
          ) {
            // console.log('inval');
            // Alert.alert('Invalid Credential!');
            navigation.navigate('ProductsL');
          }
        }
      }
    } catch (e) {
      console.log(e);
      Alert.alert(
        'No Internet Connection',
        'Please check your internet connection.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputarea}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={value => setUname(value)}
        />
      </View>
      <View style={styles.inputarea}>
        <TextInput
          placeholder="password"
          style={styles.input}
          onChangeText={value => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.buttonView} onPress={() => LoginApi()}>
        <Text style={{color: 'white', fontFamily: 'Raleway-Medium'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  inputarea: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'Raleway-Medium',
    color: 'black',
    borderRadius: 5,
    height: height / 16,
    margin: 12,
    borderColor: 'rgba(18,25,26,0.3)',
    width: width / 1.4,
    borderBottomWidth: 1.2,
    padding: 10,
  },
  buttonView: {
    marginTop: 20,
    alignItems: 'center',
    height: '5%',
    width: '30%',
    // height: RFPercentage(6),
    // width: RFPercentage(25),
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#823b95',
    // marginTop: RFPercentage(10),
  },
});
