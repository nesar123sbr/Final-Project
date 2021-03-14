export const setCardTeam = (payload) => {
  return {
    type: "SET_CARD_TEAM",
    payload,
  };
};
export const postBoard = (saveBoard, _id) => {
  return {
    type: "POST_NEW_BOARD",
    saveBoard,
    _id,
  };
};
export const getListTeamBoard = (_id) => {
  return {
    type: "GET_LIST_TEAM_BOARD",

    _id,
  };
};

export const putBoardId = (data) => {
  return {
    type: "PUT_BOARD_ID",
    data,
  };
};
