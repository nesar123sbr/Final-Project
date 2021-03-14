const initialState = {
    listData: []
  };
  export const ListDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LIST_DATA":
        return {
          ...state,
          listData: action.payload,
        };
      default:
        return state;
    }
  };