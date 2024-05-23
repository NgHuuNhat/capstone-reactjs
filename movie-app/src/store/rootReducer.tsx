import { combineReducers } from "redux";
import bookTicketReducer from "../pages/user/book-tickets/duck/reducer";
import listMovieReducer from "../pages/user/home/list-movie/duck/reducer";
import movieDetailsReducer from "../pages/user/home/detail-movie/duck/reducer";
import CarouselReducer from "../pages/user/_components/HomeCarousel/duck/reducer";
import systemCinemaReducer from "../pages/user/home/system-cinema/duck/reducer";

const rootReducer = combineReducers({
    //reducer
    bookTicketReducer,
    listMovieReducer,
    movieDetailsReducer,
    CarouselReducer,
    systemCinemaReducer,
});

export default rootReducer;