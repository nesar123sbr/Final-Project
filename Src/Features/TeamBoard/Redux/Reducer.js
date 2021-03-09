const initialState = {
<<<<<<< HEAD
  listCardTeam: [
    {
      title1: "Meja Putih",
      title2: "DesignONe",
      count: "4",
    },
  ],
=======
  listCardTeam: [],
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
};
export const TeamBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD_TEAM":
      return {
        ...state,
        listCardTeam:action.payload
      };

    default:
      return state;
  }
};
