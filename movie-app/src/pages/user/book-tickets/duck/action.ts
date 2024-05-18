import * as ActionType from "./constants";
import api from "../../../../utils/apiUtil";
import { ThongTinDatVe } from "./types";

export const actFetchBookTicket = (id: any) => {
    return (dispatch: any) => {
        //loading
        dispatch(actBookTicketReques());
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

export const actBookTicket = (thongTinDatVe: ThongTinDatVe) => {
    return (dispatch: any) => {
        dispatch(actBookTicketReques());
        api
            .post("/QuanLyDatVe/DatVe", thongTinDatVe) // Giả sử "/QuanLyDatVe/DatVe" là điểm cuối của bạn để đặt vé
            .then((result) => {
                // Xử lý phản hồi thành công từ máy chủ
                // Bạn có thể gửi một action khác để xử lý thành công hoặc cập nhật trạng thái tùy thuộc vào yêu cầu
                console.log("Đặt vé thành công===", result.data.content);
                dispatch(actBookTicketSuccess(result.data.content))
            })
            .catch((error) => {
                console.log("Đặt vé thất bại!!!===", error);
                dispatch(actBookTicketFailed(error))
            });
    };
};

export const actBookTicketReques = () => {
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