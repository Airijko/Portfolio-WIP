import Logo from "../assets/images/Logo.png";
import { navigation } from "../constants";

const MainNavbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex items-center block w-[12rem] xl:mr-8" href="/">
          <img src={Logo} alt="Logo" width={40} height={40} />
          <span className="hidden lg:block font-code text-2xl uppercase lg:text-md lg:font-bold px-4">
            Airijko
          </span>
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
