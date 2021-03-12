export const getListTask = () => {
  return {
    type: "GET_LIST_TASK",
  };
};

export const setListTask = (data) => {
  return {
    type: "SET_LIST_TASK",
    data,
  };
};
