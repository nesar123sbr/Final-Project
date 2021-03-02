export const fetchGenres = () => {
  return {
    type: 'FETCH_GENRES',
  };
};

export const postTeam = () => {
  return {
    type: 'POST_TEAM',
  };
};

export const setTeam = (data) => {
  return {
    type: 'SET_TEAM',
    payload: data,
  };
};
