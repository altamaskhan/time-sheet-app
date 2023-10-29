import 'react-native-gesture-handler';
import React, { useEffect, useRef } from 'react';
import { Provider } from "react-redux";
import AppNavigator from "./src/AppNavigator/AppNavigator";
import { store } from "./src/Redux/store";


const App = () =>{

    return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
      
    )
};

export default App;