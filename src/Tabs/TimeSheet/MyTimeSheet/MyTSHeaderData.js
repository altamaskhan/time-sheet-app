import { useEffect } from "react";

const rowData = [
    {
        "defnId": 13324,
        "empId": 11895,
        "eciR3": null,
        "statId": 110,
        "insertedUserID": 13,
        "insertedDateTime": "2021-08-17T17:20:30.587",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-10-15T04:00:00.000Z",
        "endDate": "2021-10-21T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS33294",
        "view_and_Approve": 0,
        "id": 21399,
        "eid": null
    },
    {
        "defnId": 13304,
        "empId": 11895,
        "eciR3": null,
        "statId": 111,
        "insertedUserID": 13,
        "insertedDateTime": "2021-05-19T16:34:06.487",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-10-06T04:00:00.000Z",
        "endDate": "2021-10-14T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS33159",
        "view_and_Approve": 0,
        "id": 21264,
        "eid": null
    },
    {
        "defnId": 13303,
        "empId": 11895,
        "eciR3": null,
        "statId": 111,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-08T14:36:46.753",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-09-29T04:00:00.000Z",
        "endDate": "2021-10-05T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS33004",
        "view_and_Approve": 0,
        "id": 21109,
        "eid": null
    },
    {
        "defnId": 13302,
        "empId": 11895,
        "eciR3": null,
        "statId": 112,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-08T14:36:43.187",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-09-22T04:00:00.000Z",
        "endDate": "2021-09-28T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS32911",
        "view_and_Approve": 0,
        "id": 21016,
        "eid": null
    },
    {
        "defnId": 13301,
        "empId": 11895,
        "eciR3": null,
        "statId": 113,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-08T14:36:36.147",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-09-12T04:00:00.000Z",
        "endDate": "2021-09-21T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS32818",
        "view_and_Approve": 0,
        "id": 20923,
        "eid": null
    },
    {
        "defnId": 13300,
        "empId": 11895,
        "eciR3": null,
        "statId": 114,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-08T14:36:20.86",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-09-05T04:00:00.000Z",
        "endDate": "2021-09-11T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS32725",
        "view_and_Approve": 0,
        "id": 20830,
        "eid": null
    },
    {
        "defnId": 13299,
        "empId": 11895,
        "eciR3": null,
        "statId": 115,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-07T19:13:44.453",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-08-29T04:00:00.000Z",
        "endDate": "2021-09-04T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS32632",
        "view_and_Approve": 0,
        "id": 20737,
        "eid": null
    },
    {
        "defnId": 13298,
        "empId": 11895,
        "eciR3": null,
        "statId": 116,
        "insertedUserID": 13,
        "insertedDateTime": "2021-04-07T19:13:26.847",
        "updatedUserID": null,
        "updatedDateTime": null,
        "empName": "Don Michele",
        "startDate": "2021-08-22T04:00:00.000Z",
        "endDate": "2021-08-28T04:00:00.000Z",
        "timesheetStatus": "Not Submitted",
        "remarks": null,
        "tsrefnum": "TS32539",
        "view_and_Approve": 0,
        "id": 20644,
        "eid": null
    }
]

const headerData =[
       
    {
        "tabname": "TSHdr",
        "field": "startDate",
        "header": "Start date",
        "datatyp": "date",
        "allowsort": "",
        "allowfilter": "yes",
        "filterdatatyp": "date",
        "freezecolumn": "TRUE",
        "dateformat": "MM/dd/yyyy",
        "colwidth": "150px",
        "colorder": 1,
        "headeradd2": null,
        "blockhrs": 0,
        "id": 220,
        "eid": null
    },
    {
        "tabname": "TSHdr",
        "field": "endDate",
        "header": "End date",
        "datatyp": "date",
        "allowsort": "",
        "allowfilter": "yes",
        "filterdatatyp": "date",
        "freezecolumn": "",
        "dateformat": "MM/dd/yyyy",
        "colwidth": "150px",
        "colorder": 2,
        "headeradd2": null,
        "blockhrs": 0,
        "id": 221,
        "eid": null
    },
    {
        "tabname": "TSHdr",
        "field": "timesheetStatus",
        "header": "Status",
        "datatyp": "string",
        "allowsort": "",
        "allowfilter": "",
        "filterdatatyp": "",
        "freezecolumn": "",
        "dateformat": "",
        "colwidth": "200px",
        "colorder": 3,
        "headeradd2": null,
        "blockhrs": 0,
        "id": 222,
        "eid": null
    },

    
 {
        "tabname": "TSHdr",
        "field": "empName",
        "header": "Resource ",
        "datatyp": "string",
        "allowsort": "",
        "allowfilter": "",
        "filterdatatyp": "",
        "freezecolumn": "",
        "dateformat": "",
        "colwidth": "200px",
        "colorder": 4,
        "headeradd2": null,
        "blockhrs": 0,
        "id": 223,
        "eid": null
    },
    {
        "tabname": "TSHdr",
        "field": "statId",
        "header": "status id",
        "datatyp": "",
        "allowsort": "",
        "allowfilter": "",
        "filterdatatyp": "",
        "freezecolumn": "",
        "dateformat": "",
        "colwidth": "200px",
        "colorder": 5,
        "headeradd2": null,
        "blockhrs": 0,
        "id": 288,
        "eid": null
    },
    
   
]

// const MyTimeSheetData={
//     rowData:rowData,
//     headerData:headerData
// }


const MyTimeSheetData = rowData.map((row) => {
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
  
    const newRow = {};
    headerData.forEach((header) => {
        const field = header.field;
        // newRow[field] = row[field];
        // newRow[`${field}_header`] = header.header; // Add header field
        newRow[field]={
            'value': row[field],
            'header': header.header,
            'dateformat':header.dateformat
            
        }
    });
  return newRow;
});






// console.log(MyTimeSheetData,"cdsdsddss");

export default MyTimeSheetData
