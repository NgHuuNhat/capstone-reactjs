import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { actFetchHomeCarousel } from './duck/actions';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '470px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel() {
  const dispatch: any = useDispatch();

  const { data, loading } = useSelector((state: RootState) => state.CarouselReducer);

  useEffect(() => {
    dispatch(actFetchHomeCarousel());
  }, []);

  const renderBanner = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    if (data && data.length > 0) {
      return data.map((item, index) => {
        return (
          <div key={index} >
            <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
              <img className="w-full opacity-0" src={item.hinhAnh} alt="hinhBanner" />
            </div>
          </div>
        );
      });
    }
  };
  return (
    <Carousel effect="fade">
      {renderBanner()}
    </Carousel>
  );
}


