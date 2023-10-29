import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MyTimeSheetTab from './MyTimeSheet/MyTSHeaderComponent';
import ApproveTimeSheetTab from './ApproveTimeSheet/ApproveTimeSheetTab';
import Orientation from 'react-native-orientation-locker';


const AcademicExams = (props) => {
  // useEffect(() => {
  //   Orientation.unlockAllOrientations();
  // }, []);
  const [selectedheart, setSelectedheart] = useState(0);
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedData, setSelectedData] = useState("")
  const incrementCount = (event) => {
    console.log(event, "dfgdgfdgdgfgdf");
    setSelectedData(event)
    setSelectedTab(1);
  };

  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.bottomTabs} >
        <TouchableOpacity style={[styles.tab, { backgroundColor: selectedTab == 0 ? '#A6AB00' : '#00B2B4' }]}
          onPress={() => { setSelectedTab(0); }}
        >
          <Text style={styles.textInfo}>
            My Timeshets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, { backgroundColor: selectedTab == 1 ? '#A6AB00' : '#00B2B4' }]}
          onPress={() => { setSelectedTab(1); }}
        >
          <Text style={styles.textInfo}>
            Approve Timesheets
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab == 0 ? (
        <MyTimeSheetTab incrementCount={incrementCount} />
      ) :
        selectedTab == 1 ? (
          <ApproveTimeSheetTab selectedData={selectedData} />
        ) : null
      }
    </ScrollView>
  );
};

export default AcademicExams;


const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderTopWidth: 1,
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  cellText: {
    color: 'black',
  },

  container: {
    flex: 1,
    alignItems: "center",
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
  WishList: {
    position: "absolute",
    right: 10,
    top: 10
  },
  title: {
    marginTop: 170,
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 8,
    width: '86%',
    marginLeft: 10,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 40
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: "center",
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
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 25,
    marginLeft: 10
  },
  dropdown1: {
    height: 50,
    backgroundColor: 'white',
    width: '86%',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    marginTop: 20,
    borderRadius: 25,
    marginLeft: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 17,
    margin: 0,
    padding: 0
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    marginLeft: 10
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
    shadowColor: 'white',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "red",
    elevation: 2,
    marginLeft: 10
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#A6AB00',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
    width: '40%',
    alignSelf: "center",
    marginBottom: 70
  },
  loginButtonText: {
    color: '#352185',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },


  table: {
    borderWidth: 1,
    borderColor: 'White',
    width: '100%',
    // color: 'white'
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: 'white',

  },
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
    position: 'Top',
    top: 0,
  },
  tab: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 40,
    height: 40,
  },
  textInfo: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    color: "white"
  },
  container: {
    flex: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 8,
    paddingBottom: 8,
  },
  dataCell: {
    flex: 1,
  },

});
