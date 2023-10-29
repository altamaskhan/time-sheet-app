import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text ,TouchableOpacity,Dimensions} from 'react-native';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  console.log(email,"emailemailemail")
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




  return (
    <View style={styles.container}>
      {/* <Image source={require('./logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        {/* <Icon name="phone" size={20} color="#fff" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          placeholderTextColor={'white'}
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
          placeholderTextColor={'white'}
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
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity
         onPress={handleForgotPassword}
         >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} 
      // onPress={handleLogin}
      onPress={() => navigation.navigate('DrawerNavigator')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={{bottom:-20}} 
          onPress={() => navigation.navigate('SignUp')}
          >
        <Text style={styles.footerText} >Don't have account ?  SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
      color:"red"
    },
    input: {
      flex: 1,
      height: 40,
      borderBottomWidth: 1,
      borderColor: 'gray',
      marginLeft: 8,
      paddingHorizontal: 10,
      color:"#fff"
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
    placeholderStyle: {
      fontSize: 40,
      color:"white"
    },
    footerText:{
      fontSize:18,
      color:"white",
      fontWeight:"400"
    }
  });