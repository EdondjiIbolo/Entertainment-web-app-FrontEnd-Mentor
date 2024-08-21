import Movie from "./Movie";
export default function Movies({ movies }) {
  console.log(movies);
  return (
    <ul className="grid movies pt-3 gap-4">
      {movies.map((movie, index) => {
        return (
          <li key={index}>
            <Movie movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}
