import * as ActionType from "./constants";
import { Movie } from "./types";
import api from "../../../../../utils/apiUtil";
import { Action } from "../../../../../store/types";

export const actFetchListData = () => {
  return (dispatch: any) => {
    dispatch(actListMoveRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
      .then((result) => {
        dispatch(actListMoveSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actListMoveFailed(error));
      });
  };
};

const actListMoveRequest = (): Action => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMoveSuccess = (data: Movie[]): Action => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMoveFailed = (error: any): Action => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
