const initialState = {
  listData: [],
  listId: "",
};
export const ListDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_DATA":
      return {
        ...state,
        listData: action.payload,
      };

    case "PUT_LIST_ID":
      return {
        ...state,
        listId: action._id,
      };

    default:
      return state;
  }
};
