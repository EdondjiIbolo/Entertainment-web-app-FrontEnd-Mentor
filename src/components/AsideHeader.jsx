import { Link } from "react-router-dom";

export default function AsideHeader() {
  return (
    <div className="header sm:p-5 p-4 items-center bg-[#161D2F]   sm:h-[80vh] h-[70px] sm:min-h-[50px] justify-between   flex sm:flex-col gap-3 sm:gap-16">
      <picture>
        <img src="./assets/logo.svg" alt="" className="w-6 sm:w-8" />
      </picture>
      <ul className="flex sm:flex-1 sm:flex-col flex-row sm:gap-8 gap-4 items-center p-0 px-1 m-0">
        <li>
          <Link
            to="/"
            className="hover:invert hover:brightness-0 transition-all duration-100 ease-linear"
          >
            <picture>
              <img src="./assets/icon-nav-home.svg" alt="" className="w-6" />
            </picture>
          </Link>
        </li>
        <li>
          <Link
            to="/tv-series"
            className="hover:invert hover:brightness-0 transition-all duration-100 ease-linear"
          >
            <picture>
              <img src="./assets/icon-nav-movies.svg" alt="" className="w-6" />
            </picture>
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className="hover:invert hover:brightness-0 transition-all duration-100 ease-linear"
          >
            <picture>
              <img
                src="./assets/icon-nav-tv-series.svg"
                alt=""
                className="w-6"
              />
            </picture>
          </Link>
        </li>
      </ul>
      <picture className="w-12 rounded-full border  ">
        <img src="./assets/image-avatar.png" alt="" />
      </picture>
    </div>
  );
}
