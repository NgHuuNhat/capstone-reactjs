import { combineReducers } from "redux";
import bookTicketReducer from "../pages/user/book-tickets/duck/reducer";

const rootReducer = combineReducers({
    //reducer
    bookTicketReducer,
});

export default rootReducer;