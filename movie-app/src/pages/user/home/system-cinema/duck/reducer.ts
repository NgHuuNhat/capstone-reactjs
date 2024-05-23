import { Action, AppState, AppStateDetails } from "../../../../../store/types";
import * as ActionType from "../duck/constants";
import {  MovieSystemCinema } from "./types";

const initialState: AppStateDetails<MovieSystemCinema> = {
  loading: false,
  data: null,
  error: null,
};

const systemCinemaReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SYSTEM_CINEMA_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.SYSTEM_CINEMA_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.SYSTEM_CINEMA_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default systemCinemaReducer;
