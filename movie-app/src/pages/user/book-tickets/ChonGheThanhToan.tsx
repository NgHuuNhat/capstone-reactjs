import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actGetListPhongVe, actGetListBookTicket } from './duck/action';
import { DAT_GHE } from './duck/constants';
import { ThongTinDatVe } from './duck/types';
import dayjs from 'dayjs';
import _ from 'lodash';
import Alert from './Alert';

function SeatButton({ ghe }: { ghe: any }) {
    const dispatch = useDispatch(); // Sử dụng hook useDispatch ở đây
    const { danhSachGheDangChon } = useSelector((state: any) => state.bookTicketReducer);
    const isGheDangDat = danhSachGheDangChon.some((item: any) => item.maGhe === ghe.maGhe);

    const handleClick = () => {
        dispatch({
            type: DAT_GHE,
            gheDangChon: ghe,
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={ghe.daDat}
            className={`ghe ${ghe.loaiGhe === 'Vip' ? 'gheVip' : ''} ${ghe.daDat ? 'gheDaDat' : ''} ${isGheDangDat ? 'gheDangDat' : ''}`}
        >
            {ghe.daDat ? 'X' : ghe.stt}
        </button>
    );
}

function SeatTypeButton({ type, className }: { type: string, className: string }) {
    return (
        <div className={`mx-3 d-flex align-items-center`}>
            <button className={`ghe ${className}`}></button>
            <p className='m-0'>{type}</p>
        </div>
    );
}

function renderSeatButton(danhSachGhe: any[]) {
    return danhSachGhe?.map((ghe: any, index: any) => (
        <React.Fragment key={index}>
            <SeatButton ghe={ghe} />
            {(index + 1) % 16 === 0 ? <br /> : ''}
        </React.Fragment>
    ));
}

function Info({ thongTinPhim, danhSachGheDangChon }: { thongTinPhim: any, danhSachGheDangChon: any[] }) {
    return (
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
                        {danhSachGheDangChon?.map((item: any, index: any) => (
                            <span key={index} className='px-1'>{item.stt}</span>
                        ))}
                    </span>
                </div>
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
                nhat@gmail.com
            </div>
            <div className='mb-3'>
                <i>Phone</i> <br />
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
    );
}

export default function ChonGheThanhToan() {
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
            dispatch(actGetListPhongVe(id));
        }
    }, [id]);

    const { thongTinPhim, danhSachGhe } = data || "";

    const handleDatVe = () => {
        const thongTinDatVe: ThongTinDatVe = {
            maLichChieu: thongTinPhim.maLichChieu,
            danhSachVe: danhSachGheDangChon,
        };
        console.log("thongTinDatVe===", thongTinDatVe);
        dispatch(actGetListBookTicket(thongTinDatVe))
            .then(() => {
                dispatch(actGetListPhongVe(id));
                setShowAlert(true);
            });
    };

    return (
        <>
            <div> {showAlert && (<Alert message="Đặt vé thành công!" onClose={() => setShowAlert(false)} />)}</div>
            <div className='grid grid-cols-12'>
                <div className='p-3 bg-light col-span-9'>
                    <div className='w-75 mx-auto text-center'>
                        <hr className='mb-0 p-2 bg-dark rounded' />
                        <div className='trapezoid'></div>
                        <p className='mt-n4'>Màn hình</p>
                    </div>
                    <div className='w-75 mx-auto text-center border mt-2 p-1'>
                        {loading ? <div className="spinner-border"></div> : null}
                        {renderSeatButton(danhSachGhe)}
                    </div>
                    <div className='w-75 mx-auto d-flex mt-3'>
                        <div className='d-flex mx-auto'>
                            <SeatTypeButton type="Ghế trống" className="no-cursor" />
                            <SeatTypeButton type="Ghế vip" className="no-cursor gheVip" />
                            <SeatTypeButton type="Ghế đã đặt" className="no-cursor gheDaDat" />
                            <SeatTypeButton type="Ghế bạn đặt" className="no-cursor gheDangDat" />
                        </div>
                    </div>
                </div>

                <div className='p-3 border-left bg-light col-span-3 d-flex flex-column justify-content-between'>
                    <Info thongTinPhim={thongTinPhim} danhSachGheDangChon={danhSachGheDangChon} />
                    <div className=''>
                        <button className='w-100 p-3 border bg-dark text-light' onClick={handleDatVe}>
                            {loading ? <div className="spinner-border"></div> : 'Đặt vé'}
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}