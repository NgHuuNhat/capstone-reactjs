import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acFetchMovieDetails } from "./duck/actions";
import dayjs from "dayjs";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import { RootState } from "../../../../store";

export default function DetailMovie() {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movieDetailsReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(acFetchMovieDetails(id));
    }
  }, [id]);

  const date = new Date(data?.ngayKhoiChieu || "");
  const cinemaSystems = data?.heThongRapChieu || [];
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    const handleToggleTrailer =() =>{
      <iframe
            width="560"
            height="315"
            src={data?.trailer}
            title="YouTube video player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      console.log(data?.trailer)
    }
  return (
    <div className="container py-32">
      <div className="row">
        <div className="col-md-3">
          <img
            src={data?.hinhAnh}
            className="w-100 rounded"
            style={{ objectFit: "cover" }}
            height={400}
            alt={data?.tenPhim}
          />
        </div>
        <div className="col-md-9 d-flex flex-column justify-content-between">
          <div>
            <h4 className="font-weight-bold">Tên phim: {data?.tenPhim} </h4>
            <p>Mô tả: {data?.moTa} </p>
            <p>Đánh giá: {data?.danhGia}</p>
            {/* DD/MM/YYYY hh:mm */}
            <p>Ngày khởi chiếu: {dayjs(date).format("DD/MM/YYYY")}</p>
          </div>
          <div style={{ width: 200 }}>
            <button className="btn btn-success" onClick={handleToggleTrailer}>Xem trailer</button>
          </div>
        </div>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-5">
              {cinemaSystems.map((system) => {
                return (
                  <Nav.Item>
                    <Nav.Link eventKey={system?.maHeThongRap}>
                      <img
                        src={system?.logo}
                        style={{ width: 100, height: 100 }}
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9} className="mt-5">
            <Tab.Content>
              {cinemaSystems?.map((system) => {
                return (
                  <Tab.Pane eventKey={system?.maHeThongRap}>
                    {system.cumRapChieu?.map((item) => {
                      return (
                        <div>
                          {item?.tenCumRap}
                          <Row>
                            {item.lichChieuPhim?.map((item, index) => {
                              return (
                                <Col sm={2}>
                                  <Button
                                    variant="primary"
                                    key={`lich-chieu-${index}`}
                                    onClick={() => {
                                      navigate("");
                                    }}
                                  >
                                    {dayjs(item?.ngayChieuGioChieu).format(
                                      "DD/MM hh:mm"
                                    )}
                                  </Button>
                                </Col>
                              );
                            })}
                          </Row>
                        </div>
                      );
                    })}
                    {system?.tenHeThongRap}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
