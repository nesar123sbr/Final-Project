const initialState = {
  listCardTeam: [],
  _Id: "",
};
export const TeamBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD_TEAM":
      return {
        ...state,
        listCardTeam: action.payload,
      };

    case "PUT_BOARD_ID":
      return {
        ...state,
        _Id: action.data,
      };
    default:
      return state;
  }
};
