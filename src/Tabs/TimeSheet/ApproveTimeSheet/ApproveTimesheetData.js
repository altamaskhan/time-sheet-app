// const rowData = [
//     {
//         "lineid": 9348,
//         "asgnid": 9498,
//         "asgnname": "Samsung Electronics",
//         "stat": null,
//         "empname": "Don Michele",
//         "pendwith": "Don Michele",
//         "dthr1": 6,
//         "dthr2": 6,
//         "dthr3": 6,
//         "dthr4": 6,
//         "dthr5": 6,
//         "dthr6": 6,
//         "dthr7": 6,
//         "id": 0,
//         "code": null,
//         "eid": null
//     },
//     {
//         "lineid": 9349,
//         "asgnid": 9499,
//         "asgnname": "Workfact",
//         "stat": null,
//         "empname": "Don Michele",
//         "pendwith": "Don Michele",
//         "dthr1": 0,
//         "dthr2": 0,
//         "dthr3": 6,
//         "dthr4": 6,
//         "dthr5": 6,
//         "dthr6": 2,
//         "dthr7": 3,
//         "id": 0,
//         "code": null,
//         "eid": null
//     },
  
// ]

// const headerData =[
//     {
//         "tabname": "TSheader",
//         "field": "dthr1",
//         "header": "Tue 20",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 0,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr2",
//         "header": "Wed 21",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 0,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr3",
//         "header": "Thu 22",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 0,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr4",
//         "header": "Fri 23",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 0,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr5",
//         "header": "Sat 24",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 1,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr6",
//         "header": "Sun 25",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 1,
//         "id": 0,
//         "eid": null
//     },
//     {
//         "tabname": "TSheader",
//         "field": "dthr7",
//         "header": "Mon 26",
//         "datatyp": "string",
//         "allowsort": null,
//         "allowfilter": null,
//         "filterdatatyp": null,
//         "freezecolumn": null,
//         "dateformat": null,
//         "colwidth": "100px",
//         "colorder": 0,
//         "headeradd2": null,
//         "blockhrs": 0,
//         "id": 0,
//         "eid": null
//     }
// ]

// const result = rowData.map((row) => {
//   const newRow = {};
//   headerData.forEach((header) => {
//     const field = header.field;
//     // newRow[field] = row[field];
//     // newRow[`${field}_header`] = header.header; // Add header field
//     newRow[field]={
//         'value': row[field],
//         'header': header.header
        
//     }
//   });
//   return newRow;
// });

// console.log("data",result)
// export default result;