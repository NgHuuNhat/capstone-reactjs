export interface StateType {
    loading: boolean;
    data: any; 
    error: any; 
    danhSachGheDangChon: any[];
    thongTinNguoiDung: {},
    // showAlert: boolean,
}

export type ThongTinDatVe = {
    maLichChieu: number,
    danhSachVe: any[],
}