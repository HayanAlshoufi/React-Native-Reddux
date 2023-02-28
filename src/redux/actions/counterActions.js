import {DECREMENT, DEC_BY_VALUE, INCREMENT,INC_BY_VALUE, TOTAL,INCREMENT3} from './types';

export const incrementActions = async (dispatch) => { //Redux Thunk
  return dispatch ({type: INCREMENT});   //Redux Thunk
};

export const decrementActions = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementAction5 = () => {
    return{
        type:INC_BY_VALUE,
    }
}

export const decrementAction5 = () => {
    return{
        type:DEC_BY_VALUE,
    }
}


export const incrementAction3 =async (val,dispatch) => { //Redux Thunk
    return dispatch({  //Redux Thunk
        type:INCREMENT3,//Redux Thunk
        value:val
    })
}



export const totalActions = () => {
    return{
        type:TOTAL,
    }
}