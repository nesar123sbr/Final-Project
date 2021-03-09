const intialState = {
  name: "",
  email: "",
  role: "",
  industry: "",
  company_name: "",
};

export const ProfileReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        name: action.name,
        email: action.email,
        role: action.role,
        industry: action.industry,
        company_name: action.company_name,
      };
      case "SET_OUT_PROFILE":
      return {
        ...state,
        name: "",
        email: "",
        role: "",
        industry: "",
        company_name: "",
      };

    default:
      return state;
  }
};
