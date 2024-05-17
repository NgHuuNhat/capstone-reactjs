import * as ActionType from "./constants";
import api from "../../../../utils/apiUtil";

export const actFetchBookTicket = (id: any) => {
    return (dispatch: any) => {
        //loading
        dispatch(actBoolTicketReques());
        api
            .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((result) => {
                dispatch(actBookTicketSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actBookTicketFailed(error))
            })
    }
}

export const actBoolTicketReques = () => {
    return {
        type: ActionType.REQUEST,
    }
}

export const actBookTicketSuccess = (data: any) => {
    return {
        type: ActionType.SUCCESS,
        payload: data,
    }
}

export const actBookTicketFailed = (error: any) => {
    return {
        type: ActionType.FAILED,
        payload: error,
    }
}