import initmovies from "../mock/data.json";
import { Bookmark, PlayButton, RenderIcon } from "./Movie";
export default function TrendingMovies() {
  const movies = initmovies.filter((movie) => movie.isTrending);
  return (
    <ul className="slider">
      {movies.map((movie, index) => {
        return (
          <li key={index} className="slider-item">
            <TrendingMovie movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}

function TrendingMovie({ movie }) {
  return (
    <article>
      <div className="relative rounded-md overflow-hidden cursor-pointer button">
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          className=" hover:scale-110 transition-all duration-100 ease-linear hover:brightness-50 "
        />
        <Bookmark />
        <PlayButton />
        <section className="absolute bottom-3 sm:bottom-6 left-4 z-50 w-full h-14">
          <div className="flex gap-5 font-medium text-md pt-2 italic text-gray-400">
            <p> {movie.year}</p>
            <div className="list-item list-disc ">
              <span className="flex items-center gap-2">
                <RenderIcon movieCategory={movie.category} />
                <p>{movie.category}</p>
              </span>
            </div>
            <p className="list-item list-disc p-0 m-0">{movie.rating}</p>
          </div>
          <h1 className="sm:text-2xl font-semibold">{movie.title}</h1>
        </section>
      </div>
    </article>
  );
}
