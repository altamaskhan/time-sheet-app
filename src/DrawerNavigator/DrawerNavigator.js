import React, { Profiler, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image ,Dimensions} from 'react-native';
import AcademicExams from '../Tabs/TimeSheet/Timesheets';
import EntranceExams from '../Tabs/EntranceExams';
import CompetitiveExams from '../Tabs/CompetitiveExams';
import GeneralKnowledge from '../Tabs/GeneralKnowledge';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
// import Stats from '../Stats/Stats';
// import History from '../History/History';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import Profile from '../Profile/Profile';
import Orientation from 'react-native-orientation-locker';
import Home from '../Tabs/Home';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {


  return (
    <Drawer.Navigator style={styles.drawer}
     drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#2e238c',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#fff',
      drawerLabelStyle: {
        // marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}
    >
          
      
     
      <Drawer.Screen name="Home" component={Home}  options={{
          drawerIcon: ({color}) => (
            <Image source={require('../img/home.png')} style={{width:20,height:20}} />
          ),
        }}/>
      {/* <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerIcon: ({color}) => (
          <Image source={require('../img/altamas.jpeg')} style={{width:20,height:20}} />
        )
      }}
      /> */}
      {/* <Drawer.Screen name="Stats" component={Stats} 
      options={{
        drawerIcon: ({color}) => (
          <Image source={require('../img/statistic.png')} style={{width:20,height:20}} />
        )
      }}
      />
      <Drawer.Screen name="History" component={History} 
      options={{
        drawerIcon: ({color}) => (
          <Image source={require('../img/record.png')} style={{width:20,height:20}} />
        )
      }}
      /> */}

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor:"#00B2B4"
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    marginTop: 20,
    marginLeft: 20,
  },
  searchBox: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '86%',
    marginLeft: 10,
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
  },
  listItem: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
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
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
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
    color:"white"
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 8,
    width: '86%',
    marginLeft: 10,
    backgroundColor:"white",
    alignSelf:"center",
    marginTop:40
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf:"center",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    // marginLeft:10
  
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius:25,
    marginLeft:10
  },
  dropdown1: {
    height: 50,
    backgroundColor: 'white',
    width: '86%',
    borderRadius: 12,
    padding: 12,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    elevation: 2,
    marginTop:20,
    borderRadius:25,
    marginLeft: 10,
    backgroundColor:"white",
    alignSelf:"center",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 17,
    // backgroundColor:"red",
    margin:0,
    padding:0
  },
  iconStyle: {
    width: 20,
    height: 20,
    
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    marginLeft:10
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // backgroundColor: 'white',
    shadowColor: 'white',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor:"red",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    elevation: 2,
    marginLeft:10
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    marginLeft:10,
  },
  loginButton: {
    backgroundColor: '#A6AB00',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
    width: '40%',
    alignSelf:"center",
    marginBottom:70
  },
  loginButtonText: {
    color: '#352185',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  drawer:{
    backgroundColor:"red",
    height:"30%"
  }
});
