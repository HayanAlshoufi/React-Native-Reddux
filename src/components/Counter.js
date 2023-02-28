import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import { DECREMENT, INCREMENT } from './actions/types';
import {decrementAction5, decrementActions, incrementAction5, incrementActions, totalActions,incrementAction3} from '../redux/actions/counterActions';
import { decrement, increment,incrementByAmount } from '../redux/counterSlice';    //Redux Toolkit

const Counter = () => {
  const countState = useSelector(state => state.counter.count); // Add Name Reducer
  const total = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1);
    // incrementActions(dispatch); //Redux Thunk
    dispatch(increment()) //Redux Toolkit
  };

  const handleDecrement = () => {
    // setCount(count - 1)
    // dispatch(decrementActions());
    dispatch(decrement()) //Redux Toolkit
  };

  const handleIncByValue = ()=>{
    dispatch(incrementAction5())
  }

  const handleDecByValue = ()=>{
    dispatch(decrementAction5())
  }

  const handleIncBy3 = (val)=>{
    //incrementAction3(val,dispatch) //Redux Thunk
    dispatch(incrementByAmount(val))
  }

  const handleTotalValue = ()=>{
    dispatch(totalActions())
  }
  return (
    <View style={{alignItems: 'center'}}>
      <Text>{countState}</Text>
      <TouchableOpacity onPress={handleIncrement}><Text>Increment</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement}><Text>Decrement</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleIncrement}><Text>Increment</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleIncByValue}><Text>Increment By 5</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleDecByValue}><Text>Decrement By 5</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>handleIncBy3(3)}><Text>Decrement By 3</Text></TouchableOpacity>

      <TouchableOpacity onPress={handleTotalValue}><Text>{total}</Text></TouchableOpacity>

    </View>
  );
};

export default Counter;
