import { Link } from "react-router-dom";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaChevronDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const headerRef = useRef(null);
  const submenuRef = useRef(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setOpenMenu(null);
      }
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      submenuRef.current &&
      !submenuRef.current.contains(event.target)
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-black bg-opacity-70 fixed top-0 left-0 w-full z-50 shadow-md text-white"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/">LogoName</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex lg:space-x-6 lg:items-center">
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('menu1')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <span className="cursor-pointer hover:text-gray-300">Menu Item 1</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${openMenu === 'menu1' ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
              <div
                ref={submenuRef}
                className={`absolute left-0 top-full mt-2 w-48 bg-black text-white shadow-lg transition-opacity duration-300 ease-in-out ${openMenu === 'menu1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ zIndex: 100 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col">
                  <Link to="/submenu-1-1" className="p-3 hover:bg-gray-800 block">Submenu 1-1</Link>
                  <Link to="/submenu-1-2" className="p-3 hover:bg-gray-800 block">Submenu 1-2</Link>
                  <Link to="/submenu-1-3" className="p-3 hover:bg-gray-800 block">Submenu 1-3</Link>
                </div>
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('menu2')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                <span className="cursor-pointer hover:text-gray-300">Menu Item 2</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${openMenu === 'menu2' ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
              <div
                ref={submenuRef}
                className={`absolute left-0 top-full mt-2 w-48 bg-black text-white shadow-lg transition-opacity duration-300 ease-in-out ${openMenu === 'menu2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ zIndex: 100 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col">
                  <Link to="/submenu-2-1" className="p-3 hover:bg-gray-800 block">Submenu 2-1</Link>
                  <Link to="/submenu-2-2" className="p-3 hover:bg-gray-800 block">Submenu 2-2</Link>
                  <Link to="/submenu-2-3" className="p-3 hover:bg-gray-800 block">Submenu 2-3</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          </div>

          <FaSearch className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
