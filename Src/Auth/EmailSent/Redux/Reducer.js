const initialState = {
  respond: "",
};

export const EmailSentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESPOND":
      return {
        ...state,
        respond: action.respond,
      };

    default:
      return state;
  }
};
