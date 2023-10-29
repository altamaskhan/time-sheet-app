import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ApproveTimeSheetTab = () => {
  const navigation = useNavigation();


  return (

    <ScrollView >
      <Text style={styles.heading}>Approve Timesheet </Text>
    </ScrollView>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  heading: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: '600',
    marginTop: 10,
  },
 
});

export default ApproveTimeSheetTab;