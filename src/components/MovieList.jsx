import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline,IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId }) {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  });
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px]"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10"
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => sliderRight(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px] right-0 top-0 "
      />
    </div>
  );
}

export default MovieList;
