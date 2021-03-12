const initialState = {
  listCardTeam: [
    {
      title1: "Meja Putih",
      title2: "DesignONe",
      count: "4",
    },
  ],
};
export const TeamBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD_TEAM":
      return {
        ...state,
        listCardTeam: action.payload,
      };

    default:
      return state;
  }
};
