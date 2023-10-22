import { FC } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="w-full border-b px-4 py-4 shadow-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="hidden md:flex"></div>

        <Logo />

        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
