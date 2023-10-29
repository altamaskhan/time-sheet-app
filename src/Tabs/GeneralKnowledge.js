import React, { Profiler, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import * as Font from "expo-font";
import { MultiSelect } from 'react-native-element-dropdown';






const GeneralKnowledge = () => {
  const [selectedheart ,setSelectedheart] = useState(0);

  const data1 = [
    { label: 'Primary Education', value: 'Primary Education' },
    { label: 'Secondary Education', value: 'Secondary Education' },
    { label: 'Higher Secondary Education', value: 'Higher Secondary Education' },
    { label: 'Pre University', value: 'Pre University' },
    { label: 'Under Graduation', value: 'Under Graduation' },
    { label: 'Post Graduation', value: 'Post Graduation' },
  ];

  const data2 = [
    { label: 'Select Education', value: 'Select Education' },
    // { label: 'Secondary Education', value: 'Secondary Education' },
    // { label: 'Higher Secondary Education', value: 'Higher Secondary Education' },
    // { label: 'Pre University', value: 'Pre University' },
    // { label: 'Under Graduation', value: 'Under Graduation' },
    // { label: 'Post Graduation', value: 'Post Graduation' },
  ];

  const data3 = [
    { label: 'Central', value: 'Central' },
    { label: 'State', value: 'State' },

  ];
  const data4 = [
    { label: 'Central board of secondary Education', value: 'Central board of secondary Education' },
    { label: 'Bihar Board', value: 'Bihar Board' },
    { label: 'Delhi Board', value: 'Delhi Board' },
    { label: 'Hyderabad Board', value: 'Hyderabad Board' },

  ];

  const data5 = [
    { label: 'Group A', value: 'Group A' },
    { label: 'Group B', value: 'Group B' },

  ];


  const [value1, setValue1] = useState(null);
const [isFocus1, setIsFocus1] = useState(false);

const [value2, setValue2] = useState(null);
const [isFocus2, setIsFocus2] = useState(false);

const [value3, setValue3] = useState(null);
const [isFocus3, setIsFocus3] = useState(false);

const [value4, setValue4] = useState(null);
const [isFocus4, setIsFocus4] = useState(false);

const [value5, setValue5] = useState(null);
const [isFocus5, setIsFocus5] = useState(false);

const renderLabel1 = () => {
  if (value1 || isFocus1) {
    return (
      <Text style={[styles.label, isFocus1 && { color: 'blue' }]}>
       Select Education Level
      </Text>
    );
  }}

  const renderLabel2 = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label, isFocus1 && { color: 'blue' }]}>
         Select Education
        </Text>
      );
    }}

    const renderLabel3 = () => {
      if (value3 || isFocus3) {
        return (
          <Text style={[styles.label, isFocus3 && { color: 'blue' }]}>
           Select Board Type
          </Text>
        );
      }}

      const renderLabel4 = () => {
        if (value4 || isFocus4) {
          return (
            <Text style={[styles.label, isFocus4 && { color: 'blue' }]}>
             Select Board/University Type
            </Text>
          );
        }}

        const renderLabel5 = () => {
          if (value5 || isFocus5) {
            return (
              <Text style={[styles.label, isFocus5 && { color: 'blue' }]}>
               Select Board/University Type
              </Text>
            );
          }}



    const data6 = [
      { label: 'Mathematics', value: 'Mathematics' },
      { label: 'Science', value: 'Science' },
      { label: 'Hindi', value: 'Hindi' },
      { label: 'Political Science', value: 'Political Science' },
      { label: 'History', value: 'History' },
      { label: 'Thermodynamic', value: 'Thermodynamic' },
      { label: 'Social Science', value: 'Social Science' },
      { label: 'English', value: 'English' },
    ];
  
   
      const [selected6, setSelected6] = useState([]);
  
      const renderItem6= item => {
        return (
          <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.label}</Text>
            {/* <AntDesign style={styles.icon} color="black" name="Safety" size={20} /> */}
          </View>
        );
      };

      const data7 = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];
    
     
        const [selected7, setSelected7] = useState([]);
    
        const renderItem7 = item => {
          return (
            <View style={styles.item}>
              <Text style={styles.selectedTextStyle}>{item.label}</Text>
              {/* <AntDesign style={styles.icon} color="black" name="Safety" size={20} /> */}
            </View>
          );
        };



  return (
//     <ScrollView style={{backgroundColor:"#A6AB00"}}>
//       <View style={styles.container}>
//         <View>
//        <Text style={styles.title}>
//      Choose your subject
//        </Text>
//         </View>


// <MultiSelect
//           style={styles.dropdown1}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data6}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Topic"
//           value={selected6}
//           search
//           searchPlaceholder="Search..."
//           onChange={item => {
//             setSelected6(item);
//           }}
//           // renderLeftIcon={() => (
//           //   <AntDesign
//           //     style={styles.icon}
//           //     color="black"
//           //     name="Safety"
//           //     size={20}
//           //   />
//           // )}
//           renderItem6={renderItem6}
//           renderSelectedItem6={(item, unSelect) => (
//             <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
//               <View style={styles.selectedStyle}>
//                 <Text style={styles.textSelectedStyle}>{item.label}</Text>
//                 {/* <AntDesign color="black" name="delete" size={17} /> */}
//               </View>
//             </TouchableOpacity>
//           )}
//         />

// {/* seven MultiDropdown */}

// <MultiSelect
//           style={styles.dropdown1}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data7}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Sub Topic"
//           value={selected7}
//           search
//           searchPlaceholder="Search..."
//           onChange={item => {
//             setSelected7(item);
//           }}
//           // renderLeftIcon={() => (
//           //   <AntDesign
//           //     style={styles.icon}
//           //     color="black"
//           //     name="Safety"
//           //     size={20}
//           //   />
//           // )}
//           renderItem7={renderItem7}
//           renderSelectedItem6={(item, unSelect) => (
//             <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
//               <View style={styles.selectedStyle}>
//                 <Text style={styles.textSelectedStyle}>{item.label}</Text>
//                 {/* <AntDesign color="black" name="delete" size={17} /> */}
//               </View>
//             </TouchableOpacity>
//           )}
//         />

//       </View>

//       <TouchableOpacity style={styles.loginButton} >
//         <Text style={styles.loginButtonText} >START</Text>
//       </TouchableOpacity>

//     </ScrollView>

    <ScrollView style={{backgroundColor:"#A6AB00"}}>
      <View style={styles.container}>
        <View>
       <Text style={styles.title}>
    Others Components
       </Text>
        </View>
      </View>
    </ScrollView>

  );
};
export default GeneralKnowledge;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    // backgroundColor:"yellowgreen"
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
    fontSize: 16,
    marginLeft:10
  
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

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
    fontSize: 14,
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
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginLeft:10
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    marginLeft:10
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
});
