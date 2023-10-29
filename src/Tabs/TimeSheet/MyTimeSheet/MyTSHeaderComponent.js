import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import dayjs from 'dayjs';
import MyTimeSheetData from './MyTSHeaderData';
import TimeSheetDetails from './MyTSLinesComponent';
import Orientation from 'react-native-orientation-locker';

const itemsPerPage = 10; // Number of items to display per page

const MyTimeSheetTab = ({ incrementCount }) => {
  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, []);

  const [timeSheetDetailsCMP, setTimeSheetDetailsCMP] = useState(false);
  const [statId, setStatId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const headers = Object.keys(MyTimeSheetData[0]);

  const formatDate = (value, dateformat) => {
    if (dateformat === 'MM/dd/yyyy') {
      return dayjs(value).format('MM/DD/YYYY');
    }
    return value;
  };

  const toggleModal = (item) => {
    setStatId(item.statId.value);
    setTimeSheetDetailsCMP(true);
  };

  const backtoTimeSheet = () => {
    setTimeSheetDetailsCMP(false);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = MyTimeSheetData.slice(startIndex, endIndex);

  const from = startIndex;
  const to = endIndex < MyTimeSheetData.length ? endIndex : MyTimeSheetData.length;
  const numberOfItemsPerPageList = [10, 20, 30]; // Define your desired items per page options.

  const onItemsPerPageChange = (newItemsPerPage) => {
    // Handle the change in items per page.
    // You can implement the logic to update the table here.
  };

  return (
    <ScrollView>
      {timeSheetDetailsCMP ? (
        <TimeSheetDetails backtoTimesheet={backtoTimeSheet} statId={statId} />
      ) : (
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header>
              {headers.map((headerKey) => (
                headerKey !== 'statId' ? (
                  <DataTable.Title
                    key={headerKey}
                    style={{ fontWeight: 'bold', fontSize: 16 }}
                  >
                     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {MyTimeSheetData[0][headerKey].header}
                    </Text>
                  </DataTable.Title>
                ) : null
              ))}
            </DataTable.Header>
            {paginatedData.map((item) => (
              <DataTable.Row key={item.statId.value}>
                {headers.map((headerKey) => (
                  headerKey !== 'statId' ? (
                    <DataTable.Cell key={headerKey} onPress={() => toggleModal(item)} style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>
                      {headerKey === 'startDate' || headerKey === 'endDate' ?
                        formatDate(item[headerKey].value, item[headerKey].dateformat) :
                        item[headerKey].value
                      }
                    </Text>
                  </DataTable.Cell>
                  ) : null
                ))}
              </DataTable.Row>
            ))}
          </DataTable>
          <DataTable.Pagination
            page={currentPage}
            numberOfPages={Math.ceil(MyTimeSheetData.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
            label={`${from + 1}-${to} of ${MyTimeSheetData.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            // numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel="Rows per page"
          />
        </View>
      )}
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
});

export default MyTimeSheetTab;



