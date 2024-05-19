import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchBookTicket, actBookTicket, actLayThongTinNguoiDung } from './duck/action';
import { DAT_GHE } from './duck/constants';
import { ThongTinDatVe } from './duck/types';
import dayjs from 'dayjs';
import _ from 'lodash';

function CustomAlert({ message, onClose }: any) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2800); // Thời gian tự động đóng: 3 giây

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div id='alert' className="alert alert-success" role="alert">
      {message}
    </div>
  );
}

function ChonGheThanhToan() {
  // useEffect(() => {
  //   // Kiểm tra xem có thông tin người dùng trong localStorage không
  //   const user = localStorage.getItem('USER');
  //   if (!user) {
  //     // Nếu không có, chuyển hướng đến trang đăng nhập
  //     window.location.href = '/login';
  //   }
  // }, []);

  // const {user} = useSelector(state => state.userReducer);

  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { loading, data, danhSachGheDangChon } = useSelector((state: any) => state.bookTicketReducer);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(actFetchBookTicket(id));
    }
  }, [id]);

  const { thongTinPhim, danhSachGhe } = data || "";

  const renderDanhSachGhe = () => {
    return danhSachGhe?.map((ghe: any, index: any) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = danhSachGheDangChon.some((item: any) => item.maGhe === ghe.maGhe) ? 'gheDangDat' : ''; // Kiểm tra xem ghế hiện tại có trong danh sách ghế đang chọn hay không
      // let classGheBanDat = user.taiKhoan === ghe.taiKhoanNguoiDat ? 'gheBanDat' : '';
      return (
        <React.Fragment key={index}>
          <button onClick={() => {
            dispatch({
              type: DAT_GHE,
              gheDangChon: ghe,
            })
          }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} `}
          // ${classGheBanDat}
          > {ghe.daDat ? 'X' : ghe.stt} </button>
          {(index + 1) % 16 === 0 ? <br /> : ''}
        </React.Fragment>
      )
    });
  }

  const handleDatVe = () => {
    const thongTinDatVe: ThongTinDatVe = {
      maLichChieu: thongTinPhim.maLichChieu,
      danhSachVe: danhSachGheDangChon,
    };
    console.log("thongTinDatVe===", thongTinDatVe); // Hiển thị thông tin đặt vé trong console
    dispatch(actBookTicket(thongTinDatVe)) // Dispatch action để gửi dữ liệu đặt vé
      // gửi dữ liệu đặt vé xong thì cập nhật lại danh sách ghế
      .then(() => {
        // Gọi action để lấy danh sách ghế đang chọn từ Redux store
        dispatch(actFetchBookTicket(id));
        // Sau khi đặt vé thành công
        setShowAlert(true);

      });
  };

  return (
    <>
      {showAlert && (<CustomAlert message="Đặt vé thành công!" onClose={() => setShowAlert(false)} />)}
      <div className='grid grid-cols-12'>
        <div className='p-3 bg-light col-span-9'>
          <div className='w-75 mx-auto text-center'>
            <hr className='mb-0 p-2 bg-dark rounded' />
            <div className='trapezoid'></div>
            <p className='mt-n4'>Màn hình</p>
          </div>
          <div className='w-75 mx-auto text-center border mt-2 p-1'>
            {loading ? <div className="spinner-border"></div> : null}
            {renderDanhSachGhe()}
          </div>
          <div className='w-75 mx-auto d-flex mt-3'>
            <div className='d-flex mx-auto'>
              <div className='mx-3 d-flex align-items-center'>
                <button className='ghe no-cursor'></button>
                <p className='m-0'>Ghế trống</p>
              </div>
              <div className='mx-3 d-flex align-items-center'>
                <button className='gheVip no-cursor'></button>
                <p className='m-0'>Ghế vip</p>
              </div>
              <div className='mx-3 d-flex align-items-center'>
                <button className='gheDaDat no-cursor'></button>
                <p className='m-0'>Ghế đã đặt</p>
              </div>
              <div className='mx-3 d-flex align-items-center'>
                <button className='gheDangDat no-cursor'></button>
                <p className='m-0'>Ghế bạn đặt</p>
              </div>
            </div>
          </div>
        </div>

        <div className='p-3 border-left bg-light col-span-3 d-flex flex-column justify-content-between'>
          <div className=''>
            <h5 className='text-center py-1'>{thongTinPhim?.tenPhim}</h5>
            <hr />
            <p>Địa điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.diaChi} - {thongTinPhim?.tenRap}</p>
            <p>Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
            <hr />
            <div className=''>
              <div className='grid grid-cols-12'>
                <p className='m-0 col-span-2'>Ghế:</p>
                <span className='text-red-400 d-flex flex-wrap col-span-10'>
                  {danhSachGheDangChon?.map((item: any, index: any) => {
                    return <span key={index} className='px-1'>{item.stt}</span>
                  })}
                </span></div>
              <div className='grid grid-cols-12 mt-2'>
                <p className='col-span-2 m-0'>Giá:</p>
                <p className='col-span-10 text-right m-0'>
                  {danhSachGheDangChon.reduce((tongTien: any, item: any) => {
                    return tongTien += item.giaVe;
                  }, 0).toLocaleString()} đ
                </p>
              </div>
              <div className='d-flex align-items-center justify-content-between mt-2'>
                <p className='m-0'>Giảm Giá:</p>
                <p className='text-right m-0'>0%</p>
              </div>
            </div>
            <hr />
            <div className='mb-3'>
              <i>Email</i> <br />
              {/* {user.username} */}
              nhat@gmail.com
            </div>
            <div className='mb-3'>
              <i>Phone</i> <br />
              {/* {user.phone} */}
              1234567890
            </div>
            <hr />
            <div className='d-flex align-items-center justify-content-between'>
              <p className='m-0'>Tổng cộng:</p>
              <h3 className='text-right text-2xl text-green-400 m-0'>
                {danhSachGheDangChon.reduce((tongTien: any, item: any) => {
                  return tongTien += item.giaVe;
                }, 0).toLocaleString()} đ
              </h3>
            </div>
          </div>
          <div className=''>
            <button className='w-100 p-3 border bg-dark text-light' onClick={handleDatVe}>{loading ? <div className="spinner-border"></div> : 'Đặt vé'}</button>
          </div>
        </div>

      </div>
    </>

  )
}

function KetQuaDatVe() {
  const dispatch: any = useDispatch();
  const { thongTinNguoiDung } = useSelector((state: any) => state.bookTicketReducer);

  useEffect(() => {
    dispatch(actLayThongTinNguoiDung());
  }, [])

  console.log("thongTinNguoiDung===", thongTinNguoiDung)

  const renderTicketItem = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((item: any, index: any) => {
      const danhSachGhe = _.first(item.danhSachGhe) as any;
      console.log("danhSachGhe", danhSachGhe)
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center rounded-lg p-2" style={{ backgroundColor: '#f0f0f0' }}>
            <img alt="team" className="mr-2 w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src={item.hinhAnh} />
            <div className="flex-grow p-2">
              <h6 className="text-gray-900 title-font font-medium text-xs font-weight-bold">{item.tenPhim}</h6>
              <p className="text-gray-500 m-0 text-xs font-weight-bold">Mã vé: {item.maVe}</p>
              <p className="text-gray-500 m-0 text-xs ">Ngày đặt: {dayjs(item.ngayDat).format('DD/MM/YYYY HH:mm')}</p>
              <p className="text-gray-500 m-0 text-xs ">Địa chỉ: {danhSachGhe.tenHeThongRap}</p>
              <p className="text-gray-500 m-0 text-xs ">Tên rạp: {danhSachGhe.tenRap} - Ghế: {danhSachGhe.tenGhe}</p>
              <p className="text-gray-500 m-0 text-xs ">Giá vé: {item.giaVe.toLocaleString()} đ</p>

            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section className="text-gray-600 body-font bg-light">
      <div className="container py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lịch sử đặt vé</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa chỉ và thời gian để xem phim vui vẻ bạn nhé!</p>
        </div>

        <hr />

        <div className="flex flex-wrap m-2">
          {renderTicketItem()}


        </div>
      </div>
    </section>
  )
}

export default function BookTickets() {
  return (
    <div className='min-h-screen'>
      <ul className="nav nav-tabs" role="tablist">
        <li className="ml-2">&nbsp;</li>
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#home" role="tab">01 CHỌN GHẾ & THANH TOÁN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#profile" role="tab">02 KẾT QUẢ ĐẶT VÉ</a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane p-2 active" id="home" role="tabpanel"><ChonGheThanhToan /></div>
        <div className="tab-pane p-2" id="profile" role="tabpanel"><KetQuaDatVe /></div>
      </div>
    </div>
  )
}