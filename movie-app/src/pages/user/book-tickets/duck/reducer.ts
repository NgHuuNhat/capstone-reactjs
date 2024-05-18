import * as ActionType from "./constants"
import { StateType } from "./types";

const initialState: StateType = {
    loading: false,
    data: null,
    error: null,
    danhSachGheDangChon: [],
    thongTinNguoiDung: {},
}

const bookTicketReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case ActionType.DAT_GHE: {
            console.log("action", action)
            let cloneDanhSachGheDangChon = [...state.danhSachGheDangChon];
            let index = cloneDanhSachGheDangChon.findIndex((item: any) => item.maGhe === action.gheDangChon.maGhe);
            if (index != -1){
                cloneDanhSachGheDangChon.splice(index, 1);
            } else {
                cloneDanhSachGheDangChon.push(action.gheDangChon);
            }

                return { ...state, danhSachGheDangChon: cloneDanhSachGheDangChon };
        }

        // case ActionType.SET_THONG_TIN_NGUOI_DUNG: {
        //     state.thongTinNguoiDung = action.thongTinNguoiDung;
        //     return { ...state };
        // }

        default:
            return { ...state };
    }
}

export default bookTicketReducer;