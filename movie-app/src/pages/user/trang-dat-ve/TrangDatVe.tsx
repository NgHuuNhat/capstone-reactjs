import React, { useEffect } from 'react';

export default function TrangDatVe() {
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong localStorage không
    const user = localStorage.getItem('USER');
    if (!user) {
      // Nếu không có, chuyển hướng đến trang đăng nhập
      window.location.href = '/dang-nhap';
    }
  }, []);

  return (
    <div>TrangDatVe</div>
  )
}
