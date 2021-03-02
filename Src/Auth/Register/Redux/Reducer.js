const intialState = {
    name: '',
    email:'',
    password:'',
    
  };
  
  export const RegisterReducer = (state = intialState, action) => {
    switch (action.type) {
      case 'SET_NEW_USER':
        return {
          ...state,
          name: action.name,
          email: action.email,
          password: action.password,
          
        };
  
      default:
        return state;
    }
  };
  