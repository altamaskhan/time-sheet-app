import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllocationDataTable from '../../Allocation/AlloacationDataTable';
import Orientation from 'react-native-orientation-locker';
import { Button } from 'react-native-paper';

const DetailsTable = ({ statId }) => {
  useEffect(() => {
    Orientation.lockToLandscape(); // Lock this screen to portrait orientation
    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientations when the screen unmounts
    };
  }, []);

  const fetchData = async () => {
    try {
      // Define the API endpoint URL
      const apiUrl = 'https://api.example.com/data'; // Replace with your API URL

      // Make a GET request to the API using the fetch API with async/await
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const responseData = await response.json();

      // Update the data state with the fetched data
      //   setData(responseData);


    } catch (error) {
      // Handle any errors here
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  //   useEffect(()=>{
  //    fetchData()
  //   },[])


  console.log(statId, "statId0001");
  const [searctData, setSearctData] = useState()



  const [rowData, setRowData] = useState([
    {
      "lineid": 9348,
      "asgnid": 9498,
      "asgnname": "Samsung Electronics",
      "stat": null,
      "empname": "Don Michele",
      "pendwith": "Don Michele",
      "dthr1": 0,
      "dthr2": 0,
      "dthr3": 0,
      "dthr4": 0,
      "dthr5": 0,
      "dthr6": 0,
      "dthr7": 0,
      "id": 0,
      "code": null,
      "eid": null
    },
    // {
    //   "lineid": 9090,
    //   "asgnid": 9007,
    //   "asgnname": "testing",
    //   "stat": null,
    //   "empname": "Don Michele",
    //   "pendwith": "Don Michele",
    //   "dthr1": 0,
    //   "dthr2": 0,
    //   "dthr3": 0,
    //   "dthr4": 0,
    //   "dthr5": 0,
    //   "dthr6": 0,
    //   "dthr7": 0,
    //   "id": 0,
    //   "code": null,
    //   "eid": null
    // }


  ]);
  const [editingRowId, setEditingRowId] = useState(null);

  const headerData = [
    {
      "tabname": "TSheader",
      "field": "dthr1",
      "header": "Tue 20",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 0,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr2",
      "header": "Wed 21",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 0,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr3",
      "header": "Thu 22",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 0,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr4",
      "header": "Fri 23",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 0,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr5",
      "header": "Sat 24",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 1,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr6",
      "header": "Sun 25",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 1,
      "id": 0,
      "eid": null
    },
    {
      "tabname": "TSheader",
      "field": "dthr7",
      "header": "Mon 26",
      "datatyp": "string",
      "allowsort": null,
      "allowfilter": null,
      "filterdatatyp": null,
      "freezecolumn": null,
      "dateformat": null,
      "colwidth": "100px",
      "colorder": 0,
      "headeradd2": null,
      "blockhrs": 0,
      "id": 0,
      "eid": null
    }
  ]

  console.log(rowData, "rowData");


  // adding new row
  const addRow = () => {
    const newRow = {
      "lineid": Math.random(),
      "asgnid": null,
      "asgnname": "",
      "stat": null,
      "empname": "",
      "pendwith": "",
      "dthr1": 0,
      "dthr2": 0,
      "dthr3": 0,
      "dthr4": 0,
      "dthr5": 0,
      "dthr6": 0,
      "dthr7": 0,
      "id": 0,
      "code": null,
      "eid": null
    };

    setRowData([...rowData, newRow]);
  };

  // deleting row
  const deleteRow = (lineid) => {
    const updatedData = rowData.filter(row => row.lineid !== lineid);
    setRowData(updatedData);
  };

  const toggleEditRow = (lineid) => {
    setEditingRowId(lineid);
  };

  const saveEditedData = (lineid) => {
    // Find the edited row by lineid and update the rowData
    const updatedData = rowData.map(row => {
      if (row.lineid === lineid) {
        return {
          ...row,
        };
      }
      return row;
    });

    setRowData(updatedData);
    setEditingRowId(null); // Exit edit mode
  };







  const handleInputChange = (lineid, field, value) => {
    console.log(lineid, field, value, "value00000");

    // Find the edited row by lineid and update the value of the specific field
    const updatedData = rowData.map(row => {
      if (row.lineid === lineid) {
        return {
          ...row,
          [field]: value,
        };
      }
      return row;
    });
    setRowData(updatedData);
  };



  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (lineid) => {
    setModalVisible(!isModalVisible);

  };

  const [lineID, setLineId] = useState()

  useEffect(() => {
    if (searctData) {
      const updatedData = rowData.map(row => {
        if (row.lineid === lineID) {
          return {
            ...row,
            asgnname: searctData.projectName,
            asgnid: searctData.id
          };
        }
        return row;
      });

      setRowData(updatedData);
      setEditingRowId(null); // E
    }

  }, [searctData])



  const [editingCell, setEditingCell] = useState({ rowId: null, field: null });


  const handleCellClick = (lineid, field) => {
    setEditingCell({ rowId: lineid, field });
  };

  const handleCellBlur = () => {
    setEditingCell({ rowId: null, field: null });
  };

  const isCellEditable = (lineid, field) => {
    return editingCell.rowId === lineid && editingCell.field === field;
  };


  const renderHeaderRow = () => {
    return (
      <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Allocation</Text>
        {headerData.map((header, index) => (
          <Text key={index} style={styles.tableHeaderCell}>
            {header.header}
          </Text>
        ))}
        <Text style={styles.tableHeaderCell}>Actions</Text>
      </View>

    );
  }



  const renderDataRows = () => {
    return rowData.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.tableRow}>


        <TextInput
          style={{ width: 80 }}
          placeholder="Select..."
          value={row.asgnname}
          onChangeText={(text) =>
            handleInputChange(row.lineid, 'asgnname', text)}
          editable={statId <= 111 ? true : false}
        />



        <Icon
          onPress={() => {
            toggleModal();
            setLineId(row.lineid);
          }}
          name="search"
          size={20}
          color="#999"
          style={styles.icon}
        />
        {headerData.map((header, headerIndex) => (
          <View key={headerIndex}>
            {isCellEditable(row.lineid, header.field) ? (
              <TextInput
                style={styles.inputField}
                onChangeText={(text) => {
                  // Replace commas with periods and check if the input is a valid number between 0 and 24
                  const cleanedText = text.replace(',', '.'); // Replace any commas with periods
                  const floatValue = parseFloat(cleanedText);

                  if (!isNaN(floatValue) && floatValue >= 0 && floatValue <= 24) {
                    handleInputChange(row.lineid, header.field, floatValue.toString());
                  } else {
                    // Handle invalid input, you can show an error message or take other actions.
                  }
                }}
                onBlur={handleCellBlur}
                value={String(row[header.field])}
                editable={statId <= 111 ? true : false}
                keyboardType="numeric"
              />

            ) : (
              <Text
                style={styles.tableCell}
                onPress={() => handleCellClick(row.lineid, header.field)} // Enable editing on cell click
              >
                {row[header.field]}
              </Text>
            )}
          </View>
        ))}

        {statId <= 111 ?

          // <TouchableOpacity onPress={() => deleteRow(row.lineid)}>
          //   <Text style={styles.deleteButton}>Delete</Text>
          // </TouchableOpacity>
                   <Button
                   style={{
                     backgroundColor: 'red',
                     margin:10
                   }}
                   labelStyle={{
                     color: 'white',
                   }}
                   mode="contained" 
                   
                   onPress={() => deleteRow(row.lineid)}
                   
                   >
                   Delete
                 </Button>
          :
          //   <TouchableOpacity>
          //   <Text style={styles.deleteButton}>Delete</Text>
          // </TouchableOpacity>
          null

        }

      </View>
    ));
  };

  const handleSubmit = async () => {
    try {
      // Create a payload with the data you want to submit
      const data = {
        // Your data properties here
      };

      const response = await fetch('https://example.com/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response as needed
      if (response.ok) {
        const result = await response.json();
        console.log('Submit successful', result);
      } else {
        throw new Error('Failed to submit data');
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Submit error', error);
    }
  };

  // const serviceCall=async()=>{
  //   const response=await axios({
  //     method:PostSlice,
  //     data:rowData
  //   })
  //   if(response.ok){
  //     console.log()
  //   }

  // }


  return (
    <>
      {statId <= 111 ?
        // <TouchableOpacity onPress={addRow} style={styles.addButton}>
        // <Text style={styles.addButtonText}>+ Add Row</Text>
        <View
        //  style={styles.container}
        >
          <View style={styles.buttonRight}>

            <Button
              style={{
                backgroundColor: '#A6AB00',
              }}
              labelStyle={{
                color: 'white',
              }}
              mode="contained" onPress={addRow}>
              + Add Row
            </Button>
          </View>
        </View>
        // </TouchableOpacity>
        :
        null
      }

      <ScrollView horizontal>
        <View style={styles.tableWrapper}>
          <View style={styles.table}>
            {renderHeaderRow()}
            {renderDataRows()}
          </View>
        </View>


      </ScrollView>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="Save" onPress={() => console.log('Save button pressed')} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View> */}
      <View
        style={styles.container}>
        <View style={styles.buttonContainer}>

          <Button
            style={{
              backgroundColor: '#A6AB00',
            }}
            labelStyle={{
              color: 'white',
            }}
            mode="contained" onPress={() => console.log('Save button pressed')}>
            Save
          </Button>

        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={{
              backgroundColor: '#A6AB00',
            }}
            labelStyle={{
              color: 'white',
            }}
            mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}> 
            <Text style={{fontSize:16, fontWeight:500, color:"black"}}>Allocation Table</Text>
            <View style={styles.tableContainer} >
              <AllocationDataTable setData={setSearctData} modelClose={toggleModal} />
            </View>
            <TouchableOpacity onPress={toggleModal}>
              {/* <Text>Close2</Text> */}
              <Button
            style={{
              backgroundColor: '#A6AB00',
            }}
            labelStyle={{
              color: 'white',
            }}
            mode="contained" 
            onPress={toggleModal}
            >
            Close
          </Button>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}



const styles = StyleSheet.create({
  tableWrapper: {
    // borderWidth: 1,
    backgroundColor: '#ebf7f7',
    borderRadius:20,
    padding:1,
    margin:10
  },
  table: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:20
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,

    borderColor: 'white',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    // borderWidth: 1,
    borderColor: 'white',
    width: 100,
  },
  tableCell: {
    flex: 1, // This will make other columns flexible
    padding: 10,
    textAlign: 'center',
    // borderWidth: 1,
    borderColor: 'white',
    width: 100,
  },
  deleteButton: {
    color: 'red',
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 5,
    margin: 10,
    alignItems: 'center',
    width: 100
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    color: 'blue',
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  inputField: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: 100,
  },
  // Add a specific style for the column you want to have equal width
  equalWidthColumn: {
    flex: 0, // Disable flex for this column
    width: 150, // Set a fixed width for this column
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background behind the modal
    padding:20
  },
  modalContent: {
    width: 800,
    backgroundColor: '#fff', // White background for the dialog
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  tableContainer: {
    width: '100%', // Ensure the table takes up the full width
    marginTop: 10, // Add margin as needed

  },
  icon: {
    marginTop: 15
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    margin: 10,
  },
  buttonContainer: {
    // No need for marginHorizontal
    marginHorizontal: 8,

  },

  buttonRight: {
    // justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },

});

export default DetailsTable;
