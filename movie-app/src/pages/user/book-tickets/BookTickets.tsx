import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchBookTicket, actBookTicket } from './duck/action';
import { DAT_GHE } from './duck/constants';
import { ThongTinDatVe } from './duck/types';

export default function BookTickets() {
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

  useEffect(() => {
    if (id) {
      dispatch(actFetchBookTicket(id));
    }
  }, [id]);

  const { thongTinPhim, danhSachGhe } = data || "";
  console.log("thongTinPhim", thongTinPhim)//maGhe, giaVe
  console.log("danhSachGhe", danhSachGhe)
  console.log("danhSachGheDangChon", danhSachGheDangChon) //maLichChieu

  const renderDanhSachGhe = () => {
    return danhSachGhe?.map((ghe: any, index: any) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      let indexGheDangChon = danhSachGheDangChon.findIndex((item: any) => item.maGhe === ghe.maGhe);
      if (indexGheDangChon != -1) { classGheDangDat = 'gheDangDat' }

      return (
        <React.Fragment key={index}>
          <button onClick={() => {
            dispatch({
              type: DAT_GHE,
              gheDangChon: ghe,
            })
          }} disabled={ghe.daDat} key={index} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.daDat ? 'X' : ghe.stt}</button>
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
    dispatch(actBookTicket(thongTinDatVe)); // Dispatch action để gửi dữ liệu đặt vé
    // Thực hiện các hành động khác sau khi gửi dữ liệu thành công
  };

  return (
    <div className=''>
      <div className='grid grid-cols-12 min-h-screen'>
        <div className='p-3 bg-light col-span-9'>
          <h5 className='py-1'>Đặt vé xem phim</h5>
          <hr />
          <div className='w-75 mx-auto text-center'>
            <hr className='mb-0 p-2 bg-dark rounded' />
            <div className='trapezoid'></div>
            <p className='mt-n4'>Màn hình</p>
          </div>
          <div className='w-75 mx-auto text-center border mt-2'>
            {loading ? <div>loading...</div> : null}
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
                <p className='m-0'>Ghế đang chọn</p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 border-left bg-light col-span-3 d-flex flex-column justify-content-between'>
          <div>
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
            <button className='w-100 p-3 border bg-dark text-light' onClick={handleDatVe}>ĐẶT VÉ</button>
          </div>
        </div>
      </div>
    </div>
  )
}
