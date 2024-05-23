import React from "react";
import { Movie } from "./duck/types";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

type Props = {
  movie: Movie;
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  }
export default function MovieComponent(props: Props) {
  <Outlet />
  
  const navigate = useNavigate();

  const { movie } = props;
  return (
    <div className="col-md-3">
      <div className="card">
      <Link to={`detail-movie/${movie.maPhim}`} className="btn" onClick={scrollToTop}>
        <img className="card-img-top w-full" src={movie.hinhAnh} style={{height:350}} alt="" />
        <div className="card-body">
          <h4 className="card-title mb-3 h-16">{movie.tenPhim}</h4>
          <p className="card-title mb-3">{movie.moTa.length > 100 ? <span>{movie.moTa.slice(0,100)} ...</span> : <span>{movie.moTa}</span>}</p>
          </div>
            <Button className="btn btn-success">Chi tiết</Button>
          </Link>
        </div>
      </div>
  );
}
