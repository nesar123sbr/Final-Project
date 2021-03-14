const initialState = {
  teamName: "",
  teamList: [],
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

    case "PUT_TEAM_ID":
      return {
        ...state,
        teamList: action.payload._id,
      };

    default:
      return state;
  }
};
