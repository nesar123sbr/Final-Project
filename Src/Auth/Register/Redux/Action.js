export const RegisterAction = (name,email,password) => {
    return {
      type: 'REGISTER',
      name,
      email,
      password,
    };
  };
  