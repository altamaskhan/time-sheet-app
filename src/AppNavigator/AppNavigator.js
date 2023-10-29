import React, { useState ,useEffect } from 'react';
import {Text, View ,Dimensions   } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from '../Splash/Splash';
import Login from '../LoginPage/Login';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';
import Account from '../Profile/Profile';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import Orientation from 'react-native-orientation-locker';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {


  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, []);

  return (
    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
        <Drawer.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Drawer.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }}/>
        <Drawer.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false}}  />
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Drawer.Navigator>
   </NavigationContainer>
  );
};
export default AppNavigator;
