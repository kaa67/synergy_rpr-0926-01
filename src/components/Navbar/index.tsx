import ThemeController from "./components/ThemeController";

import MainMenuItems from "./components/MainMenuItems";
import Sandwitch from "./components/Sandwitch";

import { fullName } from "utils/constants";

const Navbar = () => (
  <nav className="navbar glass sticky top-0 z-40">
    <div className="container mx-auto flex flex-row justify-between">
      <div className="flex flex-row md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn md:hidden">
            <Sandwitch />
          </div>

          <ul
            tabIndex={0}
            className="
              p-2
              menu
              mt-3
              z-[1]
              shadow
              bg-base-300
              dropdown-content
              rounded-box w-52
            "
          >
            <MainMenuItems />
          </ul>
        </div>
      </div>

      <div className="flex flex-row">
        <a className="btn btn-ghost text-xl" href="/" title={`Досье ${fullName}`}>
          Портфолио
        </a>

        <ul className="menu menu-horizontal px-1 hidden md:flex whitespace-nowrap">
          <MainMenuItems />
        </ul>
      </div>

      <ThemeController />
    </div>
  </nav>
);

export default Navbar;
