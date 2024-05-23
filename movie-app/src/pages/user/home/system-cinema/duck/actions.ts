import { Action } from "../../../../../store/types";
import api from "../../../../../utils/apiUtil";
import * as ActionType from "./../duck/constants";
import { Content, MovieSystemCinema } from "./types";

export const acFetchSystemCinema = () => {
  return (dispatch: any) => {
    dispatch(acSystemCinemaRequest());
    // call api
    api
      .get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`)
      .then((response) => dispatch(acSystemCinemaSuccess(response.data)))
      .catch((error: any) => dispatch(acSystemCinemaFailed(error)));
  };
};

const acSystemCinemaRequest = (): Action => {
  return {
    type: ActionType.SYSTEM_CINEMA_REQUEST,
  };
};
const acSystemCinemaSuccess = (data: any): Action => {
  return {
    type: ActionType.SYSTEM_CINEMA_SUCCESS,
    payload: data,
  };
};
const acSystemCinemaFailed = (error: any): Action => {
  return {
    type: ActionType.SYSTEM_CINEMA_FAILED,
    payload: error,
  };
};
