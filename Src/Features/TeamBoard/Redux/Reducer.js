const initialState = {
  listCardTeam: [],
};
export const TeamBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD_TEAM':
      return {
        ...state,
        listCardTeam:action.payload
      };

    default:
      return state;
  }
};
