import React, { useState ,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  Modal,
  Dimensions 
} from 'react-native';
import {  Portal,  PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Dashboard = (props) => {
  // const [modalVisible, setModalVisible] = useState(false);

const navigation = useNavigation();

  const [selectedTab ,setSelectedTab] = useState(0);
  console.log(props?.route?.params, "params...........")

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,width:100,height:50};

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  // useEffect(() => {
  //   Orientation.lockToLandscape(); // Lock this screen to landscape orientation
  //   return () => {
  //     Orientation.unlockAllOrientations(); // Unlock orientations when the screen unmounts
  //   };
  // }, []);
  const [rotate, setRotate] = useState(false)

  // useEffect(() => {

  //   // Lock to landscape orientation when the component mounts
  //       //Implementing the setInterval method
  //   Orientation.lockToLandscape();
  //   setRotate(!props?.route?.params?.data)

  // }, [props?.route?.params?.data]);


  const functRotate = () => {
    navigation.navigate('Home', {
      data : props?.route?.params?.type === 'back' ? props?.route?.params : rotate
      // data : rotate
    
    })
  }

//   componentDidMount =() => {
//    console.log("dasdd")
//     Orientation.lockToPortrait()
// }

  return (
    // <SafeAreaView>
      <ScrollView style={styles.container}>
    <View >
      <View style={styles.header}>
        <Image source={require('../img/boy.png')} style={[styles.icon,{margin:10}]} />
        <Text style={styles.text}>You have Selected Quizz Round</Text>
        <TouchableOpacity onPress={() => functRotate()}>
        <Image source={require('../img/back.png')} style={[styles.icon,{margin:10}]} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View>
          <Text style={styles.GameiconText}>VS</Text>
          <Image source={require('../img/hacker.png')} style={styles.hacker} />
        </View>

        <TouchableOpacity onPress={() =>{setSelectedTab(0);}}>
          <View style={[styles.circleImage,{ backgroundColor : selectedTab == 0 ? '#2ab162' : '#fff'}]} >
            <Image
              source={require('../img/quiz.png')}
              style={styles.Gameicon}
            />
          </View>
          <Text style={styles.GameiconText}>Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>{setSelectedTab(1);}}>
          <View style={[styles.circleImage,{ backgroundColor : selectedTab == 1 ? '#2ab162' : '#fff'}]}>
            <Image
              source={require('../img/quiz.png')}
              style={styles.Gameicon}
            />
          </View>
          <Text style={styles.GameiconText}>Buzzer</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() =>{setSelectedTab(2);}}>
          <View style={[styles.circleImage,{ backgroundColor : selectedTab == 2 ? '#2ab162' : '#fff'}]}>
            <Image
              source={require('../img/quiz.png')}
              style={styles.Gameicon}
            />
          </View>
          <Text style={styles.GameiconText}>Fire</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={{marginRight:50}}  onPress={() =>{setSelectedTab(3);}}>
          <View style={[styles.circleImage,{ backgroundColor : selectedTab == 3 ? '#2ab162' : '#fff'}]}>
            <Image
              source={require('../img/quiz.png')}
              style={styles.Gameicon}
            />
          </View>
          <Text style={styles.GameiconText}>Exam</Text>
        </TouchableOpacity>

      </View>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'row',
          },
        ]}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <View>
          <TouchableOpacity  onPress={() =>{setSelectedTab(4);}}>
            <Text style={[styles.usertab,{ backgroundColor : selectedTab == 4 ? '#2ab162' : '#1b0f3a'}]}>User Vs System</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>{setSelectedTab(5);}}>
            <Text style={[styles.usertab,{ backgroundColor : selectedTab == 5 ? '#2ab162' : '#1b0f3a'}]}>User Vs User2</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>{setSelectedTab(6);}}>
            <Text style={[styles.usertab,{ backgroundColor : selectedTab == 6 ? '#2ab162' : '#1b0f3a'}]}>User Vs User4</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 4,
     
          }}>
        {/* {selectedTab == 0 ? (<QuizTabs rotate={rotate}/>) : selectedTab == 1  ? (<Buzzer/>) : selectedTab == 2  ? (<FireTab/>) : selectedTab == 3  ? (<ExamTab/>) : selectedTab == 4  ? (<SideTab1/>) : selectedTab == 5  ? (<SideTab2/>) : selectedTab == 6  ? (<SideTab3/>) :  null} */}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
        <TouchableOpacity  onPress={handleCloseModal} style={{alignSelf:"flex-end"}}>
        <Image source={require('../img/cross.png')} style={styles.closeIcon} />
        </TouchableOpacity>
          <View style={styles.modalContent}>
          {/* <SafeAreaView> */}
            {/* <ScrollView> */}
             
            <View style={styles.modalContentBorder}>
            {/* <SafeAreaView> */}
           
          
                  <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"black"}}>Game Instructions</Text>
                  <View >
                  <ScrollView style={{height: 30}}>
                <Text>
                The objective of QuizMania is to answer a series of trivia questions correctly. The game consists of multiple levels, each with different categories and increasing difficulty. Your goal is to answer as many questions correctly as possible and score the highest points.
                </Text>
                <Text>
                Gameplay:
                </Text>
                <Text>
                1. Choose a Level: At the start of the game, you can select a level from the available options. Each level contains questions from a specific category (e.g., General Knowledge, History, Science, etc.).
                </Text>
                <Text>
                  2. Answering Questions: Once you've selected a level, you will be presented with a series of trivia questions, one at a time. Each question will have multiple choices, and you must choose the correct answer by tapping or clicking on the option.
                </Text>
                <Text>
                  3. Scoring: Points will be awarded for each correct answer. The faster you answer, the more points you'll earn. However, be careful! Wrong answers will result in a deduction of points. So, think carefully before selecting an option.
                </Text>
                <Text>
                  4. Time Limit: Some questions may have a time limit. You must answer within the given time to score points. If you run out of time, the question will be marked as incorrect.
                </Text>
                <Text>
                  5. Level Completion: After answering all the questions in a level, you will unlock the next level with more challenging questions.
                </Text>
                <Text>
                Controls:
                </Text>
                <Text>
                Tap or Click: Use your finger to tap on the correct answer or use the mouse to click on the option.
                </Text>
                <Text>
                Tips:
                </Text>
                <Text>
                  1. Read each question carefully before selecting an answer.
                </Text>
                <Text>
                  2. Use lifelines wisely. Save them for challenging questions.
                </Text>
                <Text>
                  3. Keep an eye on the timer for questions with time limits.
                </Text>
                <Text>
                  4. Pay attention to the scoring system. Speed and accuracy are essential for a high score.
                </Text>
                
                </ScrollView>
                </View>
              {/* </SafeAreaView> */}
              
            </View>
            <TouchableOpacity  style={styles.closeButton}    onPress={() => navigation.navigate('NewGame')}>
              <Text style={styles.closeButtonText}>START GAME</Text>
            </TouchableOpacity>
            {/* </ScrollView> */}
              
              {/* </SafeAreaView> */}
         
   
          </View>
        </View>
      </Modal>
    </View>
    </ScrollView>
    // </SafeAreaView>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3c41',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('0%'),
  },
  icon: {
    width: 40,
    height: 40,
    padding:20
  },
  hacker: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1, // This allows the text to take the remaining space between the two images
    marginHorizontal: 10,
    color: '#887dd6',
  },
  Gameicon: {
    width: 25,
    height: 25,
  },
  circleImage: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  GameiconText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  usertab: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1b0f3a',
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderLeftWidth:0
  },
  table: {
    borderRadius: 5,
    padding: 5,
  },
  headerDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: 'black',
    paddingVertical: 5,
    color: 'red',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#191919',
    paddingVertical: 5,
    backgroundColor: '#191919',
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    // paddingBottom:20
  },
  header1: {
    // backgroundColor: '#f0f0f0',
    color: 'black',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  GameButton: {
    backgroundColor: '#cc3904',
  },
  GameButton1: {
    backgroundColor: '#1ba782',
  },
  GameButtontext: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    backgroundColor: '#4c1331',
    // padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width:750,
    height:290,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
  },
  modalContentBorder: {
    fontSize: 17,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginLeft:100,
    marginRight:100,
    marginTop:40,
    padding:10,
    height:180
    // overflow:"scroll"
  },
  closeButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fcd033',
    borderRadius: 50,
    marginBottom:40,
    marginTop:5,
    width:180,
    alignSelf:"center"
  },
  closeButtonText: {
    color: '#18235f',
    fontSize: 20,
    fontWeight:"bold"
  },
  closeIcon:{
    width:35,
    height:35,
    alignSelf:"flex-end",
    // color:"#fff",
    // fontWeight:"bold",
    // backgroundColor:"red"
  },
  modalContainer: {
    width: "Math.max(width, height) * 0.8",
    height: "Math.min(width, height) * 0.6",
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
