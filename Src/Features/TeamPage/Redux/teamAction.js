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
// export const setTeam = (data) => {
//   return {
//     type: "SET_TEAM",
//     payload: data,
//   };
// };
