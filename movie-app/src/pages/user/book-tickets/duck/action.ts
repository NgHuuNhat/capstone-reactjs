import * as ActionType from "./constants";
import api from "../../../../utils/apiUtil";
import { ThongTinDatVe } from "./types";

export const actGetListPhongVe = (id: any) => {
    return (dispatch: any) => {
        //loading
        dispatch(actReques());

        return new Promise((resolve, reject) => {
            api
                .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
                .then((result) => {
                    dispatch(actSuccess(result.data.content))
                    resolve(result.data.content);
                })
                .catch((error) => {
                    dispatch(actFailed(error))
                    reject(error);
                })
        });
    }
}

export const actGetListBookTicket = (thongTinDatVe: ThongTinDatVe) => {
    return async (dispatch: any) => { // Đánh dấu hàm này là async
        dispatch(actReques());

        return new Promise((resolve, reject) => {
            api.post("/QuanLyDatVe/DatVe", thongTinDatVe)
                .then(async (result) => { // Đánh dấu hàm này là async
                    console.log("Đặt vé thành công===", result.data.content);
                    dispatch(actSuccess(result.data.content));
                    await dispatch(actGetListPhongVe(thongTinDatVe.maLichChieu)); // Sử dụng await ở đây
                    resolve(result.data.content);
                })
                .catch((error) => {
                    console.log("Đặt vé thất bại!!!===", error);
                    dispatch(actFailed(error));
                    reject(error);
                });
        });
    };
};


export const actGetUserInfo = () => {
    return (dispatch: any) => {
        dispatch(actReques());

        // return new Promise((resolve, reject) => {
        api.post("/QuanLyNguoiDung/ThongTinTaiKhoan")
            .then((result) => {
                console.log("Thông tin tài khoản===", result.data.content);
                dispatch(actUserInfo(result.data.content));
                // resolve(result.data.content);
            })
            .catch((error) => {
                console.log("Thông tin thất bại!!!===", error);
                dispatch(actFailed(error));
                // reject(error);
                // });
            });
    };
};

//
export const actReques = () => {
    return {
        type: ActionType.REQUEST,
    }
}

export const actSuccess = (data: any) => {
    return {
        type: ActionType.SUCCESS,
        payload: data,
    }
}

export const actFailed = (error: any) => {
    return {
        type: ActionType.FAILED,
        payload: error,
    }
}

export const actUserInfo = (data: any) => {
    return {
        type: ActionType.THONG_TIN_NGUOI_DUNG,
        payload: data,
    }
}