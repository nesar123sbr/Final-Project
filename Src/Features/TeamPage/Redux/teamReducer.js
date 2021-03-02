const initialState = {
  genres: [],
  movies: [],
  teams: [],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };

    case 'SET_TEAM':
      return {
        ...state,
        teams: action.payload,
      };

    default:
      return state;
  }
};
