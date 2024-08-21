import "./App.css";
import AsideHeader from "./components/AsideHeader";
import Movies from "./components/Movies";
import TrendingMovies from "./components/TrendingMovies";
import { useSearch } from "./Hooks/useSearch";
export function RenderMovies({ movies }) {
  const noTrendingMovies = movies.filter((movie) => !movie.isTrending);

  return (
    <>
      <p className="my-3 pt-6 text-xl font-semibold">Trending</p>
      <article className="slider-container">
        <TrendingMovies />
      </article>

      <section className="pt-6">
        <p className="mb-3 text-xl font-semibold">Recommended for you</p>
        <Movies movies={noTrendingMovies} />
      </section>
    </>
  );
}
export function Header({ search, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className="flex-1">
      <label className="flex w-full gap-3 items-center p-2 px-0  ">
        <picture className="w-7 cursor-pointer">
          <img src="./assets/icon-search.svg" alt="" />
        </picture>
        <input
          type="text"
          className="flex-1 bg-transparent border-b-2 p-2   focus:text-white  text-xl focus:capitalize  placeholder:text-zinc-400 border-zinc-500 outline-none "
          placeholder="Search for movies or TV series"
          value={search}
          onChange={handleChange}
        />
      </label>
    </header>
  );
}
function Home() {
  const { search, movies, setSearch } = useSearch();
  return (
    <main className="main-container">
      <aside className=" sm:p-5">
        <AsideHeader />
      </aside>
      <main className="main-movies  sm:pt-5 mb-8">
        <Header search={search} setSearch={setSearch} />
        {search.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <RenderMovies movies={movies} />
        )}
      </main>
    </main>
  );
}

export default Home;
