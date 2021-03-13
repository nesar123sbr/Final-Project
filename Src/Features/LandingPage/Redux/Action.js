export const setListTeams = (payload) => {
    return {
      type: "SET_TEAMS",
      payload,
    };
  };
  
  export const getListTeams = (payload) => {
    return {
      type: "GET_LIST_TEAMS",
      payload,
    };
  };