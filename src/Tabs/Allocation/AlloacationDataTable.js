// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   ScrollView,
  
// } from 'react-native';
// import Orientation from 'react-native-orientation-locker';



// const AllocationDataTable = (props) => {
//   const rowData = [
//     {
//       "assigneeID": 11897,
//       "eAssigneeID": null,
//       "projectID": 2006,
//       "eProjectID": null,
//       "taskID": 2007,
//       "eTaskID": null,
//       "subTaskID": 0,
//       "eSubTaskID": null,
//       "insertedDateTime": "2014-09-11T23:54:45.903",
//       "insertedUserID": 13,
//       "updatedDateTime": "2023-06-07T22:11:39.253",
//       "updatedUserID": 777,
//       "uom": null,
//       "cvQ1": "Unused Value",
//       "empasgn": "DoN2 Michele",
//       "asignname": "mid year vacation [v_003]  -- Bangalore_vacation [v_003_1]   ",
//       "projname": "mid year vacation",
//       "projcode": "v_003",
//       "projNameFull1": null,
//       "taskname": "Bangalore_vacation",
//       "taskcode": "v_003_1",
//       "subtaskname": " ",
//       "loc": "New York sales office",
//       "subtaskcode": " ",
//       "plannedStartDate": "2018-02-01T00:00:00",
//       "plannedEndDate": "2018-04-29T00:00:00",
//       "qty": null,
//       "durationtxt": null,
//       "planAllocPerc": null,
//       "remarks": null,
//       "locationID": 119,
//       "roleID": null,
//       "allocStatus": 224,
//       "role": null,
//       "stat": "Completed",
//       "actualStartDate": null,
//       "actualEndDate": null,
//       "uommesr": null,
//       "compPerc": null,
//       "actualDur": null,
//       "actualAllocPerc": 100,
//       "asgnRemarks": null,
//       "userAllowedToChange": 0,
//       "userAllocChange": null,
//       "projbill": "No",
//       "misclns": "Yes",
//       "projmgr": "YusuF Khan",
//       "projectTypId": 556,
//       "asgndate": "2014-09-11T23:54:45.903",
//       "asgnView": 0,
//       "asgnUpdt": 0,
//       "worlAllocImg": null,
//       "worlAllocImgExist": null,
//       "id": 9491,
//       "eid": null
//     },
//     {
//       "assigneeID": 11897,
//       "eAssigneeID": null,
//       "projectID": 6012,
//       "eProjectID": null,
//       "taskID": 5023,
//       "eTaskID": null,
//       "subTaskID": 0,
//       "eSubTaskID": null,
//       "insertedDateTime": "2014-09-18T01:01:27.057",
//       "insertedUserID": 13,
//       "updatedDateTime": "2023-06-07T19:07:13.223",
//       "updatedUserID": 777,
//       "uom": 480,
//       "cvQ1": "Unused Value",
//       "empasgn": "DoN2 Michele",
//       "asignname": "LG-Electronics [PRO_ELE01]  -- LG-40 TV [Pro_Elec_01_01]   ",
//       "projname": "LG-Electronics",
//       "projcode": "PRO_ELE01",
//       "projNameFull1": null,
//       "taskname": "LG-40 TV",
//       "taskcode": "Pro_Elec_01_01",
//       "subtaskname": " ",
//       "loc": "New York sales office",
//       "subtaskcode": " ",
//       "plannedStartDate": "2018-09-12T00:00:00",
//       "plannedEndDate": "2019-09-29T00:00:00",
//       "qty": 10,
//       "durationtxt": "10 Days",
//       "planAllocPerc": null,
//       "remarks": "done",
//       "locationID": 119,
//       "roleID": null,
//       "allocStatus": 222,
//       "role": null,
//       "stat": "In Progress",
//       "actualStartDate": "2019-09-12T00:00:00",
//       "actualEndDate": "2019-09-29T00:00:00",
//       "uommesr": "Days",
//       "compPerc": null,
//       "actualDur": 56,
//       "actualAllocPerc": 100,
//       "asgnRemarks": "yyyyyyyy",
//       "userAllowedToChange": 1,
//       "userAllocChange": null,
//       "projbill": "Yes",
//       "misclns": "No",
//       "projmgr": "Don Michele",
//       "projectTypId": 551,
//       "asgndate": "2014-09-18T01:01:27.057",
//       "asgnView": 0,
//       "asgnUpdt": 0,
//       "worlAllocImg": null,
//       "worlAllocImgExist": null,
//       "id": 9501,
//       "eid": null
//     },
//     {
//       "assigneeID": 11897,
//       "eAssigneeID": null,
//       "projectID": 6013,
//       "eProjectID": null,
//       "taskID": 5026,
//       "eTaskID": null,
//       "subTaskID": 0,
//       "eSubTaskID": null,
//       "insertedDateTime": "2014-09-18T01:01:56.703",
//       "insertedUserID": 13,
//       "updatedDateTime": "2023-06-07T16:53:53.677",
//       "updatedUserID": 777,
//       "uom": null,
//       "cvQ1": "Unused Value",
//       "empasgn": "DoN2 Michele",
//       "asignname": "Samsung Electronics [Pro_Elec_02]  -- Samsung Mixers [Pro_Elec_02_02]   ",
//       "projname": "Samsung Electronics",
//       "projcode": "Pro_Elec_02",
//       "projNameFull1": null,
//       "taskname": "Samsung Mixers",
//       "taskcode": "Pro_Elec_02_02",
//       "subtaskname": " ",
//       "loc": "New York sales office",
//       "subtaskcode": " ",
//       "plannedStartDate": "2018-09-12T00:00:00",
//       "plannedEndDate": "2020-09-24T00:00:00",
//       "qty": null,
//       "durationtxt": null,
//       "planAllocPerc": null,
//       "remarks": "",
//       "locationID": 119,
//       "roleID": null,
//       "allocStatus": 221,
//       "role": null,
//       "stat": "Work to be started",
//       "actualStartDate": "2023-06-05T00:00:00",
//       "actualEndDate": null,
//       "uommesr": null,
//       "compPerc": null,
//       "actualDur": null,
//       "actualAllocPerc": null,
//       "asgnRemarks": "f f f",
//       "userAllowedToChange": 1,
//       "userAllocChange": null,
//       "projbill": "Yes",
//       "misclns": "No",
//       "projmgr": "Don Michele",
//       "projectTypId": 552,
//       "asgndate": "2014-09-18T01:01:56.703",
//       "asgnView": 0,
//       "asgnUpdt": 0,
//       "worlAllocImg": null,
//       "worlAllocImgExist": null,
//       "id": 9502,
//       "eid": null
//     },

//   ]


//   const headerData = [
//     {
//       "tabname": "Asign",
//       "field": "empasgn",
//       "header": "Resource",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "text",
//       "freezecolumn": "TRUE",
//       "dateformat": "",
//       "colwidth": "230px",
//       "colorder": 1,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 180,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "projname",
//       "header": "Project ",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "text",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "240px",
//       "colorder": 2,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 181,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "taskname",
//       "header": "Task",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "text",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "145px",
//       "colorder": 3,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 182,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "plannedStartDate",
//       "header": "Assign start",
//       "datatyp": "date",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "date",
//       "freezecolumn": "",
//       "dateformat": "MM/dd/yyyy",
//       "colwidth": "190px",
//       "colorder": 4,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 183,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "plannedEndDate",
//       "header": "Assign end",
//       "datatyp": "date",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "date",
//       "freezecolumn": "",
//       "dateformat": "MM/dd/yyyy",
//       "colwidth": "180px",
//       "colorder": 5,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 184,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "stat",
//       "header": "Status",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "",
//       "filterdatatyp": "",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "180px",
//       "colorder": 6,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 185,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "projmgr",
//       "header": "Project manager",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "",
//       "filterdatatyp": "",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "190px",
//       "colorder": 7,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 186,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "loc",
//       "header": "Location",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "yes",
//       "filterdatatyp": "",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "180px",
//       "colorder": 8,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 187,
//       "eid": null
//     },
//     {
//       "tabname": "Asign",
//       "field": "misclns",
//       "header": "Misclns.",
//       "datatyp": "string",
//       "allowsort": "",
//       "allowfilter": "",
//       "filterdatatyp": "",
//       "freezecolumn": "",
//       "dateformat": "",
//       "colwidth": "90px",
//       "colorder": 9,
//       "headeradd2": null,
//       "blockhrs": 0,
//       "id": 188,
//       "eid": null
//     }
//   ]
  
//   const fetchData = async () => {
//     try {
//       // Define the API endpoint URL
//       const apiUrl = 'https://api.example.com/data'; // Replace with your API URL

//       // Make a GET request to the API using the fetch API with async/await
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       // Parse the JSON response
//       const responseData = await response.json();

//       // Update the data state with the fetched data
//     //   setData(responseData);


//     } catch (error) {
//       // Handle any errors here
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };


// //   useEffect(()=>{
// //    fetchData()
// //   },[])

//   return (
//     <>
//       <ScrollView horizontal>
//         <View style={styles.container}>
//           {/* Table Headers */}
//           <View style={styles.headerRow}>
//             {headerData.map((header, index) => (
//               <Text key={index} style={styles.headerCell}>
//                 {header.header}
              
//               </Text>
//             ))}
//           </View>
//           {/* Table Rows */}
//           <FlatList
//             data={rowData}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <View style={styles.row}>
//                 {headerData.map((header, index) => (
//                   <Text key={index} style={styles.cell}
//                     onPress={() => {
//                       // console.log(item, "new data"),
//                       props.setData({projectName:item.projname, id:item.id}),
//                       props.modelClose()
//                       // props.setSelectedAllocation(item.projname,)
//                     }
//                     }
//                   >
//                     {item[header.field]}
//                   </Text>
//                 ))}
//               </View>
//             )}
//           />
//         </View>
//       </ScrollView>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // width:100,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: 'lightgray',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   headerCell: {
//     flex: 1,
//     padding: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//     textAlign: 'center',
//   },
// });


// export default AllocationDataTable



import React from 'react';
import { ScrollView, View , StyleSheet} from 'react-native';
import { DataTable, Text } from 'react-native-paper';


const AllocationDataTable = (props) => {


const rowData = [
  {
    "assigneeID": 11897,
    "eAssigneeID": null,
    "projectID": 2006,
    "eProjectID": null,
    "taskID": 2007,
    "eTaskID": null,
    "subTaskID": 0,
    "eSubTaskID": null,
    "insertedDateTime": "2014-09-11T23:54:45.903",
    "insertedUserID": 13,
    "updatedDateTime": "2023-06-07T22:11:39.253",
    "updatedUserID": 777,
    "uom": null,
    "cvQ1": "Unused Value",
    "empasgn": "DoN2 Michele",
    "asignname": "mid year vacation [v_003]  -- Bangalore_vacation [v_003_1]   ",
    "projname": "mid year vacation",
    "projcode": "v_003",
    "projNameFull1": null,
    "taskname": "Bangalore_vacation",
    "taskcode": "v_003_1",
    "subtaskname": " ",
    "loc": "New York sales office",
    "subtaskcode": " ",
    "plannedStartDate": "2018-02-01T00:00:00",
    "plannedEndDate": "2018-04-29T00:00:00",
    "qty": null,
    "durationtxt": null,
    "planAllocPerc": null,
    "remarks": null,
    "locationID": 119,
    "roleID": null,
    "allocStatus": 224,
    "role": null,
    "stat": "Completed",
    "actualStartDate": null,
    "actualEndDate": null,
    "uommesr": null,
    "compPerc": null,
    "actualDur": null,
    "actualAllocPerc": 100,
    "asgnRemarks": null,
    "userAllowedToChange": 0,
    "userAllocChange": null,
    "projbill": "No",
    "misclns": "Yes",
    "projmgr": "YusuF Khan",
    "projectTypId": 556,
    "asgndate": "2014-09-11T23:54:45.903",
    "asgnView": 0,
    "asgnUpdt": 0,
    "worlAllocImg": null,
    "worlAllocImgExist": null,
    "id": 9491,
    "eid": null
  },
  {
    "assigneeID": 11897,
    "eAssigneeID": null,
    "projectID": 6012,
    "eProjectID": null,
    "taskID": 5023,
    "eTaskID": null,
    "subTaskID": 0,
    "eSubTaskID": null,
    "insertedDateTime": "2014-09-18T01:01:27.057",
    "insertedUserID": 13,
    "updatedDateTime": "2023-06-07T19:07:13.223",
    "updatedUserID": 777,
    "uom": 480,
    "cvQ1": "Unused Value",
    "empasgn": "DoN2 Michele",
    "asignname": "LG-Electronics [PRO_ELE01]  -- LG-40 TV [Pro_Elec_01_01]   ",
    "projname": "LG-Electronics",
    "projcode": "PRO_ELE01",
    "projNameFull1": null,
    "taskname": "LG-40 TV",
    "taskcode": "Pro_Elec_01_01",
    "subtaskname": " ",
    "loc": "New York sales office",
    "subtaskcode": " ",
    "plannedStartDate": "2018-09-12T00:00:00",
    "plannedEndDate": "2019-09-29T00:00:00",
    "qty": 10,
    "durationtxt": "10 Days",
    "planAllocPerc": null,
    "remarks": "done",
    "locationID": 119,
    "roleID": null,
    "allocStatus": 222,
    "role": null,
    "stat": "In Progress",
    "actualStartDate": "2019-09-12T00:00:00",
    "actualEndDate": "2019-09-29T00:00:00",
    "uommesr": "Days",
    "compPerc": null,
    "actualDur": 56,
    "actualAllocPerc": 100,
    "asgnRemarks": "yyyyyyyy",
    "userAllowedToChange": 1,
    "userAllocChange": null,
    "projbill": "Yes",
    "misclns": "No",
    "projmgr": "Don Michele",
    "projectTypId": 551,
    "asgndate": "2014-09-18T01:01:27.057",
    "asgnView": 0,
    "asgnUpdt": 0,
    "worlAllocImg": null,
    "worlAllocImgExist": null,
    "id": 9501,
    "eid": null
  },
  {
    "assigneeID": 11897,
    "eAssigneeID": null,
    "projectID": 6013,
    "eProjectID": null,
    "taskID": 5026,
    "eTaskID": null,
    "subTaskID": 0,
    "eSubTaskID": null,
    "insertedDateTime": "2014-09-18T01:01:56.703",
    "insertedUserID": 13,
    "updatedDateTime": "2023-06-07T16:53:53.677",
    "updatedUserID": 777,
    "uom": null,
    "cvQ1": "Unused Value",
    "empasgn": "DoN2 Michele",
    "asignname": "Samsung Electronics [Pro_Elec_02]  -- Samsung Mixers [Pro_Elec_02_02]   ",
    "projname": "Samsung Electronics",
    "projcode": "Pro_Elec_02",
    "projNameFull1": null,
    "taskname": "Samsung Mixers",
    "taskcode": "Pro_Elec_02_02",
    "subtaskname": " ",
    "loc": "New York sales office",
    "subtaskcode": " ",
    "plannedStartDate": "2018-09-12T00:00:00",
    "plannedEndDate": "2020-09-24T00:00:00",
    "qty": null,
    "durationtxt": null,
    "planAllocPerc": null,
    "remarks": "",
    "locationID": 119,
    "roleID": null,
    "allocStatus": 221,
    "role": null,
    "stat": "Work to be started",
    "actualStartDate": "2023-06-05T00:00:00",
    "actualEndDate": null,
    "uommesr": null,
    "compPerc": null,
    "actualDur": null,
    "actualAllocPerc": null,
    "asgnRemarks": "f f f",
    "userAllowedToChange": 1,
    "userAllocChange": null,
    "projbill": "Yes",
    "misclns": "No",
    "projmgr": "Don Michele",
    "projectTypId": 552,
    "asgndate": "2014-09-18T01:01:56.703",
    "asgnView": 0,
    "asgnUpdt": 0,
    "worlAllocImg": null,
    "worlAllocImgExist": null,
    "id": 9502,
    "eid": null
  },

]


const headerData = [
  {
    "tabname": "Asign",
    "field": "empasgn",
    "header": "Resource",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "text",
    "freezecolumn": "TRUE",
    "dateformat": "",
    "colwidth": "230px",
    "colorder": 1,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 180,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "projname",
    "header": "Project ",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "text",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "240px",
    "colorder": 2,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 181,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "taskname",
    "header": "Task",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "text",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "145px",
    "colorder": 3,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 182,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "plannedStartDate",
    "header": "Assign start",
    "datatyp": "date",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "date",
    "freezecolumn": "",
    "dateformat": "MM/dd/yyyy",
    "colwidth": "190px",
    "colorder": 4,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 183,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "plannedEndDate",
    "header": "Assign end",
    "datatyp": "date",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "date",
    "freezecolumn": "",
    "dateformat": "MM/dd/yyyy",
    "colwidth": "180px",
    "colorder": 5,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 184,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "stat",
    "header": "Status",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "",
    "filterdatatyp": "",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "180px",
    "colorder": 6,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 185,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "projmgr",
    "header": "Project manager",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "",
    "filterdatatyp": "",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "190px",
    "colorder": 7,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 186,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "loc",
    "header": "Location",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "yes",
    "filterdatatyp": "",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "180px",
    "colorder": 8,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 187,
    "eid": null
  },
  {
    "tabname": "Asign",
    "field": "misclns",
    "header": "Misclns.",
    "datatyp": "string",
    "allowsort": "",
    "allowfilter": "",
    "filterdatatyp": "",
    "freezecolumn": "",
    "dateformat": "",
    "colwidth": "90px",
    "colorder": 9,
    "headeradd2": null,
    "blockhrs": 0,
    "id": 188,
    "eid": null
  }
]


  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <DataTable>
          {/* Table Headers */}
          <DataTable.Header>
            {headerData.map((header, index) => (
              <DataTable.Title 
              key={index}
              style={styles.cell}
              // style={{ fontWeight: 'bold', fontSize: 16 }}
              >
                 <Text 
                  style={styles.headerText}
                 >
                 {header.header}

                 </Text>
              
                </DataTable.Title>
            ))}
          </DataTable.Header>

          {/* Table Rows */}
          {rowData.map((item, rowIndex) => (
            <DataTable.Row key={rowIndex}>
              {headerData.map((header, cellIndex) => (
                <DataTable.Cell key={cellIndex}
                style={styles.cell}
                // style={{ flex: 1,alignItems:"center" }}
                >
                  <Text
                    onPress={() => {
                      props.setData({
                        projectName: item.projname,
                        id: item.id,
                      });
                    
                      props.modelClose();
                    }}
                    // style={{fontWeight:"400", fontSize:14}}
                    style={styles.cellText}
                  >
                    {item[header.field]}
                  </Text>
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // paddingTop: 30,
    backgroundColor: '#ebf7f7',
    borderRadius:20,
    padding:1,
    margin:10
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center align header text
  },
  cellText: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'flex-end', // Center align cell text
  },
  cell: {
    flex: 1, // Equal width for all cells
    // justifyContent: 'center',
    // alignItems: 'center',
    width:150
  },
});
export default AllocationDataTable