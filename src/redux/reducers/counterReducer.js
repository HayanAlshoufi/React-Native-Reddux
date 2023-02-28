import {
  DECREMENT,
  DEC_BY_VALUE,
  INCREMENT,
  INCREMENT3,
  INC_BY_VALUE,
  TOTAL,
} from '../actions/types';

const counterReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(state);
      return {...state, count: state.count + 1};

    case DECREMENT:
      console.log(state);
      return {...state, count: state.count - 1};

    case INC_BY_VALUE:
      return {...state, count: state.count + 5};

    case DEC_BY_VALUE:
      return {...state, count: state.count - 5};

    case TOTAL:
      return {...state, count: state.count};

    case INCREMENT3:
      return {...state,count:state.count + action.value}

    default:
      return state;
  }

  // if(action.type ===INCREMENT){
  //     return state.count+1
  // }
  // if(action.type ===DECREMENT){
  //     return state.count-1
  // }
};

export default counterReducer;
