export const setCard = (desc, title, priority, selectedDate) => {
  return {
    type: "SET_CARD",
    desc,
    title,
    priority,
    selectedDate,
  };
};

export const postCard = (desc, title, priority, selectedDate) => {
  return {
    type: "POST_CARD",
    desc,
    title,
    priority,
    selectedDate,
  };
};

export const setExistingLabel = (data) => {
  return {
    type: "SET_EXISTING_LABEL",
    payload: data,
  };
};

export const setSelectedLabels = (data) => {
  return {
    type: "SET_SELECTED_LABEL",
    payload: data,
  };
};

export const setMembers = (data) => {
  return {
    type: "SET_MEMBER",
    payload: data,
  };
};

export const setSelectedMembers = (data) => {
  return {
    type: "SET_SELECTED_MEMBER",
    payload: data,
  };
};

export const setPriority = (data) => {
  return {
    type: "SET_PRIORITY",
    payload: data,
  };
};

export const setDate = (data) => {
  return {
    type: "SET_DATE",
    payload: data,
  };
};

export const postLabel = (data) => {
  return {
    type: "POST_LABEL",
    labelName: data,
  };
};

export const getLabel = (data) => {
  return {
    type: "GET_LABEL",
    payload: data,
  };
};

//tanpa parameter karena API ga perlu data
export const getListLabel = () => {
  return {
    type: "GET_LIST_LABEL",
  };
};

export const setListLabel = (data, status) => {
  return {
    type: "SET_LIST_LABEL",
    payload: data,
    status: status,
  };
};

export const setDesc = (data) => {
  return {
    type: "SET_DESC",
    data,
  };
};

export const setTitle = (data) => {
  return {
    type: "SET_TITLE",
    data,
  };
};

export const setLabelid = (data) => {
  return {
    type: "SET_LABEL_ID",
    data,
  };
};

export const putLabelId = (data) => {
  return {
    type: "PUT_LABEL_ID",
    data,
  };
};

export const postList = (value) => {
  return {
    type: "POST_LABEL",
    value,
  };
};

export const combinedAction = (
  postCardData,
  labelId,
  boardId,
  teamId,
  listId
) => {
  return {
    type: "COMBINED_ACTION",
    postCardData,
    labelId,
    boardId,
    teamId,
    listId,
  };
};
