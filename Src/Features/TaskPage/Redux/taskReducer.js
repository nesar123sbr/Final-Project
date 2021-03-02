const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};
