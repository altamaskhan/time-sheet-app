import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState, useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {

  // useEffect(() => {
  //   Orientation.lockToPortrait(); // Lock this screen to portrait orientation
  //   return () => {
  //     Orientation.unlockAllOrientations(); // Unlock orientations when the screen unmounts
  //   };
  // }, []);
  

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
      {/* <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('Congratulation')}>
          <Image source={require('../img/back.png')} style={styles.BackIcon} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.userCol}>
        <View>
        <TouchableOpacity>
          <Image source={require('../img/profile01.jpeg')} style={styles.userIcon} />
        </TouchableOpacity>

        <View style={{flexDirection:"row",justifyContent:"center",marginTop:30}}>
          <View>
            <Text style={{color:"#fff",paddingRight:5}}>
              Edit
            </Text>
          </View>
          <View>
          <TouchableOpacity>
          <Image source={require('../img/pencil.png')} style={styles.pencilIcon} />
        </TouchableOpacity>
          </View>
        </View>

        </View>

        <View>
        <TextInput
          style={styles.input}
          defaultValue="Srinivas thota"
          editable={false}
        />
         <TextInput
          style={styles.input}
          defaultValue="thota.srinivas0@gmail.com"
          editable={false}
        />
         <TextInput
          style={styles.input}
          defaultValue="+918877665544"
          editable={false}
        />
         <TextInput
          style={styles.input}
          defaultValue="Male"
          editable={false}
        />
        </View>
      </View>


      <View style={{flexDirection:"row",marginTop:50}}>
        <View style={{flexDirection:"column"}}>
          <View>
          <Image source={require('../img/coin.png')} style={styles.coinIcon} />
          </View>
          <View >
            <Text style={styles.cointext}>
              Coins
            </Text>
          </View>
        </View>

        <View style={styles.coinCount}>
          <Text style={styles.coinCountText}>
            1,000
            {/* <Text style={styles.coinCountNumber}> 1</Text>
            <Text style={styles.coinCountNumber}> ,</Text>
            <Text style={styles.coinCountNumber}> 0</Text>
            <Text style={styles.coinCountNumber}> 0</Text>
            <Text style={styles.coinCountNumber}> 0</Text> */}
          </Text>
        </View>
      </View>

      {/* <View style={{marginTop:100,flexDirection:"row",justifyContent:"center",marginBottom:50}}>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Image source={require('../img/facebook2.png')} style={styles.facebook2Icon} />
          <Text style={styles.Connectfb}>Connect</Text>
          </View>
        </TouchableOpacity>
      </View> */}
      </ScrollView>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
    backgroundColor: '#00B2B4',
  },
  back: {
    display:"flex",
    alignItems:"flex-end"
  },
  userCol:{
    flexDirection:"row",
    marginTop:70
  },
  BackIcon: {
    width: 50,
    height: 50,
  },
  userIcon:{
    width:150,
    height:150,
    borderRadius:100,
    borderWidth:5,
    borderColor:"#fff"
  },
  pencilIcon:{
    width:20,
    height:20
  },
  input: {
    flex: 1,
    // height: 40,
    width:200,
    borderBottomWidth: 1,
    borderColor: 'white',
    marginLeft: 10,
    paddingHorizontal: 10,
    color:"black",
    backgroundColor:"white",
    borderRadius:10,
    marginBottom:10,
    fontSize:14
  },
  coinIcon:{
    width:140,
    height:140,
    marginLeft:30
  },
  cointext:{
    color:"#fff",
    fontSize:20,
    alignSelf:"center",
    marginTop:10
  },
  coinCount:{
    display:"flex",
    justifyContent:"center",
  
  },
  facebook2Icon:{
    width:40,
    height:40
  },
  Connectfb:{
    color:"#fff",
    padding:10,
    backgroundColor:"#4267b2"
  },
  coinCountNumber:{
    // backgroundColor:"#cf9d39",
    fontWeight:"bold",
    paddingHorizontal:50
  },
  coinCountText:{
    color:"black",
    fontSize:35,
    marginLeft:50,
    backgroundColor:"#f5c552",
    padding:6,
    borderRadius:8,
    fontWeight:"bold",

  },
});
