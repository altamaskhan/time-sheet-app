import React, { Profiler, useState, useEffect } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TimeSheet from './TimeSheet/Timesheets';
import EntranceExams from './EntranceExams';
import CompetitiveExams from './CompetitiveExams';
import GeneralKnowledge from './GeneralKnowledge';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
// import Orientation from 'react-native-orientation';
const Drawer = createDrawerNavigator();

// import DrawerNavigator from '../Drawer/DrawerNavigator';
// import CustomDrawer from '../Drawer/CustomDrawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Home = (props) => {

  const navigation = useNavigation();
    
    const [selectedTab ,setSelectedTab] = useState(0);
    // console.log(props?.route?.params?.data, "params...........")
    const [rotate, setRotate] = useState(false)

  console.log(props?.route?.params, "use...........")


    // useEffect(() => {
    //   // Lock to landscape orientation when the component mounts
    //   Orientation.lockToPortrait();
    //   setRotate(props?.route?.params?.data)
    // }, [props?.route?.params?.data]);


    const functRotate = () => {
      navigation.navigate('Dashboard', {
        data : rotate
      })
    }

    componentDidMount =() => {
      Orientation.lockToPortrait()
  }


  return (
    <View style={styles.container}>
        {selectedTab == 0 ? (<TimeSheet handleClick = {functRotate}/>) : selectedTab == 1  ? (<EntranceExams/>) : selectedTab == 2  ? (<CompetitiveExams/>) : selectedTab == 3  ? (<GeneralKnowledge/>) : null}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={[styles.tab,{ backgroundColor : selectedTab == 0 ? '#A6AB00' : '#00B2B4'}]} onPress={() =>{setSelectedTab(0);}}>
          {/* <Image source={require('../img/degree.png')} style={[styles.tabIcon,{tintColor : selectedTab == 0 ? 'white' : 'white'}]}/> */}
          <Text style={styles.textInfo}>
            {/* Academic Exams */}
            Timesheets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab,{ backgroundColor : selectedTab == 1 ? '#A6AB00' : '#00B2B4'}]} onPress={() =>{setSelectedTab(1);}}>
          {/* <Image source={require('../img/degree.png')} style={[styles.tabIcon,{tintColor : selectedTab == 1 ? 'white' : 'white'}]}/> */}
          <Text style={styles.textInfo}>
            {/* Entrance Exams */}
            Absence
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab,{ backgroundColor : selectedTab == 2 ? '#A6AB00' : '#00B2B4'}]} onPress={() =>{setSelectedTab(2);}}>
          {/* <Image source={require('../img/degree.png')} style={[styles.tabIcon,{tintColor : selectedTab == 2 ? 'white' : 'white'}]}/> */}
          <Text style={styles.textInfo}>
            {/* Competitive Exams */}
            Expenses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab,{ backgroundColor : selectedTab == 3 ? '#A6AB00' : '#00B2B4'}]} onPress={() =>{setSelectedTab(3);}}>
          {/* <Image source={require('../img/degree.png')} style={[styles.tabIcon,{tintColor : selectedTab == 3 ? 'white' : 'white'}]}/> */}
          <Text style={styles.textInfo}>
            {/* General Knowledge */}
            Others
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabs: {
    width: '100%',
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'bottom',
    // top: 680,
  },
  tab: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 40,
    height: 40,
  },
  textInfo:{
    fontSize:16,
    fontWeight:"500",
    marginLeft:10,
    color:"white"
  }
});

export default Home;