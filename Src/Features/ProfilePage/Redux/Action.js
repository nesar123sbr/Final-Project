export const getProfile = (payload) => {
  return {
    type: "GET_PROFILE",
    payload,
  };
};
export const patchProfile = (addName,addRole,addIndustry,addCompany,response) => {
  return {
    type: "PATCH_PROFILE",
    addName,
    addRole,
    addIndustry,
    addCompany,
    response
  };
};
export const patchPassword = (currentPass, newPass) => {
  return {
    type:"PATCH_PASSWORD",
    currentPass,
    newPass

  }
}
export const patchEmail =(email) => {
  return {
    type:"PATCH_EMAIL",
    email
  }
}
// export const removeCredential =() => {
//   return {
//       type:"SET_OUT_PROFILE"
//   }
// }