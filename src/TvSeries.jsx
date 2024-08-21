import AsideHeader from "./components/AsideHeader";
import { Header } from "./Home";
import Movies from "./components/Movies";
import { useSearch } from "./Hooks/useSearch";

export default function TvSeries() {
  const { search, movies, setSearch } = useSearch();
  const filteredMovies = movies.filter(
    (movies) => movies.category === "TV Series"
  );
  return (
    <main className="main-container">
      <aside className=" sm:p-5">
        <AsideHeader />
      </aside>
      <main className="main-movies  sm:pt-5 mb-8">
        <Header search={search} setSearch={setSearch} />
        <section className="pt-6">
          <Movies movies={filteredMovies} />
        </section>
      </main>
    </main>
  );
}
