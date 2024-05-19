import React from 'react';
import ChonGheThanhToan from './ChonGheThanhToan';
import KetQuaDatVe from './KetQuaDatVe';

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