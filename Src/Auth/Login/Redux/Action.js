export const ActionLogin = (email,password) => {
    return {
      type: 'LOGIN',
      email,
      password,
    };
  };
  
  export const logOut = () => {
    return {
      type: 'LOG_OUT',
    };
  };
  