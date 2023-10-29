import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text ,TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation-locker';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Here you can implement your login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Implement your "Forgot Password" logic here
    console.log('Forgot Password');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   Orientation.lockToPortrait(); // Lock this screen to portrait orientation
  //   return () => {
  //     Orientation.unlockAllOrientations(); // Unlock orientations when the screen unmounts
  //   };
  // }, []);


  return (
    <View style={styles.container}>
      {/* <Image source={require('./logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>SignUp</Text>
      <View style={styles.inputContainer}>
        {/* <Icon name="phone" size={20} color="#fff" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon name="phone" size={20} color="#fff" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon name="phone" size={20} color="#fff" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon name="lock" size={20} color="#888" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.passwordVisibilityButton} onPress={togglePasswordVisibility}>
          {/* <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="#888"
            style={styles.passwordVisibilityIcon}
          /> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} 
      // onPress={handleLogin}
      onPress={() => navigation.navigate('DrawerNavigator')}
      >
        <Text style={styles.loginButtonText} >SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#00B2B4'
    },
    logo: {
      width: 350,
      height: 350,
      marginBottom: 140,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 100,
      color: '#fff',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    input: {
      flex: 1,
      height: 50,
      borderBottomWidth: 1,
      borderColor: 'white',
      marginLeft: 15,
      paddingHorizontal: 10,
      color:"black",
      backgroundColor:"white",
      borderRadius:50
    },
    icon: {
      marginRight: 8,
    },
    forgotPasswordContainer: {
      width: '100%',
      alignItems: 'flex-end',
    },
    forgotPassword: {
      color: '#fff',
      textDecorationLine: 'none',
    },
    loginButton: {
      backgroundColor: '#A6AB00',
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 30,
    },
    loginButtonText: {
      color: '#352185',
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'center',
    },
  });