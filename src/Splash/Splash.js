import React ,{useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       navigation.navigate('HomeScreen');
    //     }, 3000);
    
    //     return () => clearTimeout(timer);
    //   }, [navigation]);
  

    useEffect(() =>{
        setTimeout(() =>{
navigation.navigate('Login');
        },1000)
    },[])





  return (
    <View style={[styles.container, styles.logo,{backgroundColor:"#00B2B4"}]}>
      <Text style={[styles.logo]}
       onPress={() => navigation.navigate('Login')}
      >App</Text>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logo: {
    fontSize: 30,
    fontWeight:"500",
    color:"#fff"
  },
});
