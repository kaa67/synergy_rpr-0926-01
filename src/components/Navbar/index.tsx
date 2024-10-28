import ThemeController from "./components/ThemeController";

import MainMenuItems from "./components/MainMenuItems";
import Sandwitch from "./components/Sandwitch";

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
                menu
                dropdown-content
                mt-3
                z-[1]
                p-2
                shadow
                bg-base-300
                rounded-box w-52"
          >
            <MainMenuItems />
          </ul>
        </div>
      </div>

      <div className="flex flex-row">
        <a className="btn btn-ghost text-xl" href="/">
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
