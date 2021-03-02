const initialState = {
  desc: '',
  assign: [],
  priority: '',
  duedate: '',
  label: '',
  comment: '',
  existingLabel: [],
  selectedLabels: [],
  members: [
    {
      id: 0,
      title: 'Yosy',
    },
    {
      id: 1,
      title: 'Arga',
    },
    {
      id: 2,
      title: 'Dhedy',
    },
    {
      id: 3,
      title: 'Gada',
    },
  ],
  selectedMembers: [],
  priority: [],
  selectedDate: '',
};

export const newCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return {
        ...state,
        desc: action.payload,
        assign: action.payload,
        priority: action.payload,
        label: action.payload,
        duedate: action.payload,
      };

    case 'SET_COMMENT':
      return {
        ...state,
        comment: action.payload,
      };

    case 'SET_EXISTING_LABEL':
      return {
        ...state,
        existingLabel: action.payload,
      };

    case 'SET_SELECTED_LABEL':
      return {
        ...state,
        selectedLabels: action.payload,
        comment: action.color,
      };

    case 'SET_SELECTED_MEMBER':
      return {
        ...state,
        selectedMembers: action.payload,
      };

    case 'SET_MEMBER':
      return {
        ...state,
        members: action.payload,
      };

    case 'SET_PRIORITY':
      return {
        ...state,
        priority: action.payload,
      };
    case 'SET_DATE':
      return {
        ...state,
        selectedDate: action.payload,
      };

    default:
      return state;
  }
};
