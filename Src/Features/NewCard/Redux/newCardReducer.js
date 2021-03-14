const initialState = {
  desc: "",
  title: "",
  assign: [],
  priority: [],
  labelName: "",
  labelId: "",
  comment: "",
  existingLabel: [],
  selectedLabels: [],
  members: [
    {
      id: 0,
      title: "Yosy",
    },
    {
      id: 1,
      title: "Arga",
    },
    {
      id: 2,
      title: "Dhedy",
    },
    {
      id: 3,
      title: "Gada",
    },
  ],
  selectedMembers: [],
  selectedDate: "",
  openModal: false,
};

export const newCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD":
      return {
        ...state,
        title: action.title,
        desc: action.desc,
        priority: action.priority,
        selectedDate: action.selectedDate,
        // selectedMembers: action.payload,
        // assign: action.payload,
        // selectedLabels: action.payload,
      };

    case "SET_TITLE":
      return {
        ...state,
        title: action.data,
      };

    case "SET_DESC":
      return {
        ...state,
        desc: action.data,
      };

    case "SET_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };

    case "POST_LABEL":
      return {
        ...state,
        labelName: action.payload,
      };

    case "SET_EXISTING_LABEL":
      return {
        ...state,
        existingLabel: action.payload,
        labelId: action.payload,
      };

    case "SET_SELECTED_LABEL":
      return {
        ...state,
        selectedLabels: action.payload,
        labelId: action.payload,
      };

    case "SET_SELECTED_MEMBER":
      return {
        ...state,
        selectedMembers: action.payload,
      };

    case "SET_MEMBER":
      return {
        ...state,
        members: action.payload,
      };

    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };

    case "SET_DATE":
      return {
        ...state,
        selectedDate: action.payload,
      };

    case "SET_LIST_LABEL":
      return {
        ...state,
        existingLabel: action.payload,
        openModal: action.status,
      };

    case "SET_LABEL_ID":
      return {
        ...state,
        labelId: action.data,
      };

    case "PUT_LABEL_ID":
      return {
        ...state,
        labelId: action.data,
      };

    default:
      return state;
  }
};
