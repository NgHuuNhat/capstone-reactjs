import { Action } from "../../../../../store/types";
import api from "../../../../../utils/apiUtil";
import * as ActionType from "./../duck/constants";
import { Content } from "./types";

export const actFetchHomeCarousel = () => {
  return (dispatch: any) => {
    dispatch(actHomeCarouselRequest());
    // call api
    api
      .get(`/QuanLyPhim/LayDanhSachBanner`)
      .then((result) => {
        dispatch(actHomeCarouselSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actHomeCarouselFailed(error));
      });
  };
};

const actHomeCarouselRequest = (): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_REQUEST,
  };
};
const actHomeCarouselSuccess = (data: Content[]): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_SUCCESS,
    payload: data,
  };
};
const actHomeCarouselFailed = (error: any): Action => {
  return {
    type: ActionType.HOME_CAROUSEL_FAILED,
    payload: error,
  };
};
