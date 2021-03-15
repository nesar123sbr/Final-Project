export const postTeam = (data) => {
  return {
    type: "POST_TEAM",
    teamName: data,
  };
};

export const getListTeam = (data) => {
  return {
    type: "GET_LIST_TEAM",
    payload: data,
  };
};

export const setListTeam = (data) => {
  return {
    type: "SET_LIST_TEAM",
    payload: data,
  };
};

export const setTeamId = (data) => {
  return {
    type: "SET_TEAM_ID",
    payload: data,
  };
};
