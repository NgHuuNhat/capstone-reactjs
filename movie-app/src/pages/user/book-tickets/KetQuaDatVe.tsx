import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetUserInfo } from './duck/action';
import dayjs from 'dayjs';
import _ from 'lodash';

export default function KetQuaDatVe() {
    const dispatch: any = useDispatch();
    const { thongTinNguoiDung, loading } = useSelector((state: any) => state.bookTicketReducer);

    useEffect(() => {
        dispatch(actGetUserInfo());
    }, [])

    console.log("thongTinNguoiDung===", thongTinNguoiDung)

    const renderTicketItem = () => {
        return loading ? (
            <div className="spinner-border mx-auto"></div>
        ) : (
            thongTinNguoiDung.thongTinDatVe?.map((item: any, index: any) => {
                const danhSachGhe = _.first(item.danhSachGhe) as any;
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
        );
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