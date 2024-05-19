export interface StateType {
    loading: boolean;
    data: any; 
    error: any; 
    danhSachGheDangChon: any[];
    thongTinNguoiDung: {},
}

export type ThongTinDatVe = {
    maLichChieu: number,
    danhSachVe: any[],
}