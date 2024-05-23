import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListData } from "./duck/actions";
import { RootState } from "../../../../store";
import MovieComponent from "./Movie";
import { Outlet } from "react-router-dom";

export default function ListMoviePage() {
  <Outlet />
  const dispatch: any = useDispatch();
  const { loading, data } = useSelector(
    (state: RootState) => state.listMovieReducer
  );

  useEffect(() => {
    dispatch(actFetchListData());
  }, []);

  const renderListMovie = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    );

    if (data && data.length > 0) {
      return data.map((movie) => <MovieComponent movie={movie} />);
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">{renderListMovie()}</div>
    </div>
  );
}
