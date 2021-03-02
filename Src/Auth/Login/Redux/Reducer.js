const intialState = {
    email: '',
    token: '',
    isLogged: false,
  };
  
  export const LoginReducer = (state = intialState, action) => {
    
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          email:action.email,
          token: action.token,
          isLogged: true,
        };
      
      case 'LOG_OUT':
        return {
          ...state,
          email:'',
          isLogged: false,
          token: '',
        };
  
      default:
        return state;
    }
  };
  