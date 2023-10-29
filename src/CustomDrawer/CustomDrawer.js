import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Dropdown } from 'react-native-element-dropdown';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
// import {  faCoffee } from '@fortawesome/free-solid-svg-icons';

const CustomDrawer = props => {

  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);

    const data1 = [
      { label: 'Tournament 1', value: 'Tournament 1' },
      { label: 'Tournament 2', value: 'Tournament 2' },
      { label: 'Tournament 3', value: 'Tournament 3' },
    ];
    const navigation = useNavigation();
  return (
    <View style={{flex: 1,backgroundColor:"#A6AB00"}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
        source={require('../img/asasd.jpeg')}
          style={{padding: 20}}>
          <Image
           source={require('../img/altamas.jpeg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 5}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              // marginBottom: 5,
            }}>
            Altamas Khan
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                paddingRight: 8,
              }}>
              khanaltamash7795@gmail.com
              
            </Text>
            {/* <Image source={require('../img/coin.png')} style={styles.BackIcon} /> */}
            {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
            {/* <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} /> */}
            {/* <FontAwesomeIcon icon={faHeart} size={32} color="red" /> */}
          </View>
        </ImageBackground>


        <View style={{flex: 1, backgroundColor: '#A6AB00', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>

          {/* <View style={{flexDirection: 'row', color:"#fff",alignItems: 'center',paddingLeft:20,paddingVertical: 15,backgroundColor:"#A6AB00"}}>
          <Image source={require('../img/trophy.png')} style={{width:20,height:20}} />

        
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data1}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? 'Tournament' : 'Tournament'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value);
            setIsFocus1(false);
          }}
        />
           
          </View> */}
      </DrawerContentScrollView>
      
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        {/* <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../img/share.png')} style={{width:20,height:20}} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 10,
                color:"white"
              }}>
           Notifications
            </Text>
           
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity style={{paddingVertical: 15}} onPress={() => navigation.navigate('Login')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../img/exit.png')} style={{width:25,height:25}} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 10,
                color:"white"
              }}>
              Log out
            </Text>
          
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  BackIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    marginTop: 20,
    marginLeft: 20,
    backgroundColor:"#A6AB00",
  },
  searchBox: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#A6AB00",
  },
  input: {
    width: '100%',
    marginLeft: 10,
    backgroundColor:"#A6AB00",
  },
  icon: {
    width: 24,
    height: 24,
  },
  heading: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: 40,
    backgroundColor:"#A6AB00",
  },
  listItem: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    backgroundColor:"#A6AB00",
    margin: 2,
  },
  listIcon: {
    width: 50,
    height: 50,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  item: {
    width: '100%',
    height: 100,
    // backgroundColor: '#fff',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor:"#A6AB00",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  prize: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'green',
  },
  desc: {
    fontSize: 16,
    marginLeft: 10,
  },
  WishList:{
    position:"absolute",
    right:10,
    top:10
  },
  title:{
    // alignSelf:"auto",
    marginTop:170,
    justifyContent:"center",
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    backgroundColor:"#A6AB00",
  },
  dropdown: {
    height: 50,
    borderColor: '#A6AB00',
    // borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: '90%',
    backgroundColor:"#A6AB00",
    color:"white"
  },
  icon: {
    marginRight: 5,
  },
 
  placeholderStyle: {
    fontSize: 16,
    backgroundColor:"#A6AB00",
          color:"white"
  },
  selectedTextStyle: {
    fontSize: 18,
    // marginLeft:10,
    backgroundColor:"#A6AB00",
  
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius:5,
    marginLeft:10,
    // backgroundColor:"#A6AB00",
    color:"#fff"
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 17,
    // backgroundColor:"red",
    margin:0,
    padding:0,
    backgroundColor:"#A6AB00",
  },
  iconStyle: {
    width: 20,
    height: 20,
    
  },
});
