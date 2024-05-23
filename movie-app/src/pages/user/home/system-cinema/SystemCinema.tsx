import dayjs from "dayjs";
import React, { useEffect } from "react";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { acFetchSystemCinema } from "./duck/actions";

export default function SystemCinema() {
  const dispatch: any = useDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.systemCinemaReducer
  );

  useEffect(() => {
    dispatch(acFetchSystemCinema());
  }, []);
  // const date = new Date(data?.content[0].lstCumRap[0].danhSachPhim[0].lstLichChieuTheoPhim[0].ngayChieuGioChieu || "");
  const cinemaSystems = data?.content || [];
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

  return (
    <div className="container pt-4">
    <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {cinemaSystems.map((system) => {
              return (
                <Nav.Item>
                  <Nav.Link eventKey={system.maHeThongRap}>
                    <img src={system.logo} style={{ width: 60, height: 60 }} alt="logo" />
                    {system.tenHeThongRap}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            {cinemaSystems.map((system) => {
              return (
                <Tab.Pane eventKey={system.maHeThongRap}>
                  {system.lstCumRap.slice(0,5).map((item, index) => {
                    return ( <div className="mt-2" key={index}>
                        <div className="flex flex-row">
                        <img src={item.hinhAnh} style={{ width: 60, height: 60}}  alt="hinhrap" />
                        <div className="ml-2 ">
                        <p style={{fontSize:20, fontWeight:"bold", lineHeight:1}}>{item.tenCumRap}</p>
                        <p>{item.diaChi}</p>
                        </div>
                        </div>
                        <Row>
                          {item.danhSachPhim?.slice(0,12).map((item, index) => {
                            return (
                              <Col sm={2}>
                                <Button
                                  variant="primary mt-1 mb-1"
                                  key={`lich-chieu-${index}`}
                                  onClick={() => {
                                    navigate("/book-ticket");
                                  }}
                                >
                                  {dayjs(
                                    item.lstLichChieuTheoPhim[0]
                                      .ngayChieuGioChieu
                                  ).format(" hh:mm A")}
                                </Button>
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    );
                  })}
                  
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
