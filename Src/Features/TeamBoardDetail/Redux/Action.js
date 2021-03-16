export const postList = (saveList, _id) => {
  return {
    type: "POST_NEW_LIST",
    saveList,
    _id,
  };
};
export const getListData = (_id) => {
  return {
    type: "GET_LIST_DATA",
    _id,
  };
};
export const setListData = (payload) => {
  return {
    type: "SET_LIST_DATA",
    payload,
  };
};

export const putListId = (_id) => {
  return {
    type: "PUT_LIST_ID",
    _id,
  };
};
