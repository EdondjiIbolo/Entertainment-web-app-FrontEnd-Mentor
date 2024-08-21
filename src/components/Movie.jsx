import React, { useState } from "react";

export default function Movie({ movie }) {
  return (
    <article>
      <div className="relative rounded-md overflow-hidden cursor-pointer button">
        <img
          src={movie.thumbnail?.regular.large}
          alt={movie.title}
          className=" hover:scale-110 transition-all duration-100 ease-linear hover:brightness-50 "
        />
        <Bookmark />
        <PlayButton />
      </div>
      <div className="flex gap-5 text-xs pt-2 italic text-gray-400">
        <p> {movie.year}</p>
        <div className="list-item list-disc ">
          <span className="flex items-center gap-2">
            <RenderIcon movieCategory={movie.category} />
            <p>{movie.category}</p>
          </span>
        </div>
        <p className="list-item list-disc p-0 m-0">{movie.rating}</p>
      </div>
      <h1>{movie.title}</h1>
    </article>
  );
}

export function RenderIcon({ movieCategory }) {
  const isMovie = movieCategory === "Movie" ? true : false;
  return (
    <>
      {isMovie ? (
        <picture>
          <img src="./assets/icon-category-movie.svg" alt="" />
        </picture>
      ) : (
        <picture>
          <img src="./assets/icon-category-tv-series.svg" alt="" />
        </picture>
      )}
    </>
  );
}

export function Bookmark() {
  const [book, setBook] = useState(false);
  const handleBook = () => {};
  return (
    <>
      <div className="absolute top-3 right-2  w-6 h-6 bg-black hover:bg-white cursor-pointer  flex  justify-center items-center p-[5px] rounded-full bg-opacity-50">
        <img
          src="./assets/icon-bookmark-full.svg"
          alt="bookmark icon"
          className="invert drop-shadow-xl shadow-slate-100"
        />
      </div>
    </>
  );
}
export function PlayButton() {
  return (
    <picture className="w-20 text-xs justify-center gap-2 hidden  items-center p-2 bg-white bg-opacity-20 rounded-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <img src="./assets/icon-play.svg" alt="icon play" className="w-4 h-4 " />
      <p>Play</p>
    </picture>
  );
}
