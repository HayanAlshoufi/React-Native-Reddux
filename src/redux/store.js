//import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import counterReducer from './reducers/counterReducer';
import reducers from './reducers/reducers';  //import Combine Reducers
import userReducer from './reducers/userReducer';


//const store =createStore(reducers)  // Combine Reducers

const store = configureStore({
    reducer:{
        counter:counterSlice,   //Redux Toolkit
        user:userReducer
    }
})
export default store