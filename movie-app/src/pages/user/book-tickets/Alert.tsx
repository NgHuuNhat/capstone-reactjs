import React, { useEffect } from 'react';

export default function Alert({ message, onClose }: any) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000); // Thời gian tự động đóng: 3 giây

        return () => {
            clearTimeout(timeout);
        };
    }, [onClose]);

    return (
        <div className="alert alert-success position-fixed p-3 w-25 text-center" role="alert" style={{top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
            {message}
        </div>
    );
}