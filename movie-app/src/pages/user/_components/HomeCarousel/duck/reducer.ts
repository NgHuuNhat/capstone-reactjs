import { Action, AppState, AppStateDetails } from "../../../../../store/types";
import * as ActionType from "../duck/constants";
import { Content } from "./types";

const initialState: AppState<Content> = {
  loading: false,
  data: null,
  error: null,
};

const CarouselReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.HOME_CAROUSEL_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.HOME_CAROUSEL_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.HOME_CAROUSEL_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default CarouselReducer;
