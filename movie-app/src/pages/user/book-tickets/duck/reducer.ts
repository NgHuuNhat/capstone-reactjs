import * as ActionType from "./constants"

const initialState: StateType = {
    loading: false,
    data: null,
    error: null,
    danhSachGheDangChon: [],
}

interface StateType {
    loading: boolean;
    data: any; // Hoặc kiểu dữ liệu cụ thể
    error: any; // Hoặc kiểu dữ liệu cụ thể
    danhSachGheDangChon: any[]; // Hoặc kiểu dữ liệu cụ thể
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

        default:
            return { ...state };
    }
}

export default bookTicketReducer;