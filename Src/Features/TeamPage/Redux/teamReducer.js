const initialState = {
  teamName: "",
  teamList: [],
  teamId: "",
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_TEAM":
      return {
        ...state,
        teamName: action.teamName,
      };

    case "SET_LIST_TEAM":
      return {
        ...state,
        teamList: action.payload,
      };

    case "SET_TEAM_ID":
      return {
        ...state,
        teamId: action.payload,
      };
    default:
      return state;
  }
};
