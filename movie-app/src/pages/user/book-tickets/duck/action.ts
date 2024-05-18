import * as ActionType from "./constants";
import api from "../../../../utils/apiUtil";
import { ThongTinDatVe } from "./types";

export const actFetchBookTicket = (id: any) => {
    return (dispatch: any) => {
        //loading
        dispatch(actReques());
        api
            .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((result) => {
                dispatch(actSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actFailed(error))
            })
    }
}

export const actBookTicket = (thongTinDatVe: ThongTinDatVe) => {
    return (dispatch: any) => {
        dispatch(actReques());

        return new Promise((resolve, reject) => {
            api.post("/QuanLyDatVe/DatVe", thongTinDatVe)
                .then((result) => {
                    console.log("Đặt vé thành công===", result.data.content);
                    dispatch(actSuccess(result.data.content));
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

// export const actLayThongTinNguoiDung = () => {
//     return (dispatch: any) => {
//         dispatch(actReques());

//         return new Promise((resolve, reject) => {
//             api.post("/QuanLyNguoiDung/ThongTinTaiKhoan")
//                 .then((result) => {
//                     console.log("Thông tin tài khoản===", result.data.content);
//                     dispatch(actSuccess(result.data.content));
//                     resolve(result.data.content);
//                 })
//                 .catch((error) => {
//                     console.log("Thông tin thất bại!!!===", error);
//                     dispatch(actFailed(error));
//                     reject(error);
//                 });
//         });
//     };
// };


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