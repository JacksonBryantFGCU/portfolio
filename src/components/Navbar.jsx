import logo from "../assets/Jb (2).png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-black fixed w-full left-0 h-40 z-10 max-sm:bg-inherit">
      <div className="flex flex-start items-center">
        <img
          className="mx-2 pb-7 w-48 h-48 items-center text-white max-sm:hidden"
          src={logo}
          alt="logo"
        />
      </div>
      <div>
        <ul className="hidden lg:flex lg:flex-row lg:text-xl mr-10">
          <li>
            <a className="m-10 hover:underline md:m-5" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="m-10 md:m-5 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/#tech" className="m-10 hover:underline md:m-5">
              Tech
            </a>
          </li>
          <li>
            <a href="/#experiences" className="m-10 hover:underline md:m-5">
              Experiences
            </a>
          </li>
          <li>
            <a href="/#projects" className="m-10 hover:underline md:m-5">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="m-10 hover:underline md:m-5">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
