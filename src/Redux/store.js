// import { createStore } from 'redux';
// import counterReducer from './Counter/CounterReducer';

// // Passing counterReducer to createStore
// const store = createStore(counterReducer);
// export default store; 









import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './PostSlice';
export const store = configureStore({
    reducer:{
        post: PostReducer,
    },
});