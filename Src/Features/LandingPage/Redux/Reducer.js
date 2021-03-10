const intialState = {
    ListTeam : []
  };
  
  export const LandingReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SET_TEAMS":
            return {...state, ListTeam: action.payload};
      default:
        return state;
    }
  };
  