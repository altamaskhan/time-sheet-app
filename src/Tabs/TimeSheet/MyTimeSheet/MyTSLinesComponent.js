import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  // Button,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllocationDataTable from "../../Allocation/AlloacationDataTable";
import DetailsTable from './MyTSLinesData'; 
import { Button } from 'react-native-paper';


const TimeSheetDetails = ({ backtoTimesheet, statId }) => {
  const navigation = useNavigation();
console.log(statId,"statId");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (event) => {
    setModalVisible(!isModalVisible);
  };


  const [addData, setAddData] = useState(false)
  const [formData, setFormData] = useState({});
  const [searctData, setSearctData] = useState('')
  console.log(formData, "formData");

  const [tableData, setTableData] = useState();  /* initial data here */

console.log(tableData,"tableData");
  const setData = (newData) => {
    setTableData(newData);
  };

  return (
    <ScrollView >
      {/* <Text style={styles.heading}>
        <TouchableOpacity style={styles.buttonRight}
          onPress={() => { backtoTimesheet() }}
        >
          <Text style={styles.loginButtonText}
          >Back</Text>
        </TouchableOpacity>
      </Text> */}

      <View style={styles.buttonRight}>
      
      <Button mode="outline"
       icon="arrow-left"
       style={{
        backgroundColor: 'yourDesiredBackgroundColor',
      }}
      labelStyle={{
        color: '#A6AB00',
      }}
      onPress={() => { backtoTimesheet() }}
      >
  Back</Button>
</View>

      <View style={styles.container}>
        <DetailsTable data={tableData} setData={setData} statId={statId}/>
      </View>

      {addData ?
        <View style={styles.container1}>
          <View style={styles.inputContainer}>
            {formFields.map((field) => (
              <View key={field.name} style={styles.fieldContainer}>
                {console.log(field, "field333")}
                <Text style={styles.label}>{field.label}:</Text>
                <TextInput
                  style={styles.input}
                  value={formData[field.name] || ''}
                  onChangeText={(text) => handleInputChange(field.name, text)}
                />
              </View>
            ))}
          </View>
          <Button title="Save"
            onPress={() => { setAddData(false) }}
          />
        </View>
        :
        null
      }

      <View style={styles.container1}>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={toggleModal}
        >

          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Allocation Table</Text>
              <View style={styles.tableContainer} >
                <AllocationDataTable setData={setSearctData} modelClose={toggleModal} />
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <Text>Close1</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

    </ScrollView>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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
    textAlign: 'center',
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
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#A6AB00',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    width: 100
  },
  loginButtonText: {
    color: '#352185',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    margin: 5,
    padding: 5
  },





  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding:20
  },
  modalContent: {
    width: 800,
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 10,
    alignItems: 'center',
  },

  tableContainer: {
    width: '100%',
    marginTop: 10,
  },
  buttonRight: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    // margin:1,
  },
});

export default TimeSheetDetails;