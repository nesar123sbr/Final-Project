export const postCard = () => {
  return {
    type: 'POST_CARD',
  };
};

export const listMovies = () => {
  return {
    type: 'FETCH_MOVIES',
  };
};

export const setExistingLabel = (data) => {
  return {
    type: 'SET_EXISTING_LABEL',
    payload: data,
  };
};

export const setSelectedLabels = (data) => {
  return {
    type: 'SET_SELECTED_LABEL',
    payload: data,
  };
};

export const setMembers = (data) => {
  return {
    type: 'SET_MEMBER',
    payload: data,
  };
};

export const setSelectedMembers = (data) => {
  return {
    type: 'SET_SELECTED_MEMBER',
    payload: data,
  };
};

export const setPriority = (data) => {
  return {
    type: 'SET_PRIORITY',
    payload: data,
  };
};

export const setDate = (data) => {
  return {
    type: 'SET_DATE',
    payload: data,
  };
};
