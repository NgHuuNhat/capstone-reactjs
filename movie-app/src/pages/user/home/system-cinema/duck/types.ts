export type MovieSystemCinema ={
  statusCode:       number;
  message:          string;
  content:          Content[];
  dateTime:         Date;
  messageConstants: null;
}

export type Content= {
  lstCumRap:     LstCumRap[];
  maHeThongRap:  string;
  tenHeThongRap: string;
  logo:          string;
  mahom:         string;
}

export type LstCumRap ={
  danhSachPhim: DanhSachPhim[];
  maCumRap:     string;
  tenCumRap:    string;
  hinhAnh:      string;
  diaChi:       string;
}

export type DanhSachPhim ={
  lstLichChieuTheoPhim: LstLichChieuTheoPhim[];
  maPhim:               number;
  tenPhim:              string;
  hinhAnh:              string;
  hot:                  boolean | null;
  dangChieu:            boolean | null;
  sapChieu:             boolean | null;
}

export type LstLichChieuTheoPhim ={
  maLichChieu:       number;
  maRap:             string;
  tenRap:            string;
  ngayChieuGioChieu: Date;
  giaVe:             number;
}