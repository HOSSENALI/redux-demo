const initialState = {
    value: 0
  };
  
  function CounterReducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT_VALUE":
        return {
          ...state,
          value: state.value + 1,
        };
  
      case "DECREMENT_VALUE":
        return {
          ...state,
          value: state.value - 1,
        };
  
      default:
        return state;
    }
  }
  
  export default CounterReducer;