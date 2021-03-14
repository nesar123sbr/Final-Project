const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_TASK":
      return {
        ...state,
        tasks: action.data,
      };

    case "GET_LIST_TASK":
      return {
        ...state,
        tasks: action.data,
      };

    default:
      return state;
  }
};
