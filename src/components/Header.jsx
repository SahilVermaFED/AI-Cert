import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS, ROUTES, SCREEN_SIZE } from '../constants/app-contants';
import { useEffect, useState } from 'react';
import useWindowResize from '../utils/windowResizeUtils';
import { aiCertLogo } from '../assets';

const NAV_ITEMS_EXCLUDING_LAST = NAV_ITEMS.slice(0, -1);

const Header = () => {
    const windowWidth = useWindowResize();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (windowWidth >= SCREEN_SIZE.MD) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <header className="w-full sticky top-0 z-50">
            <div className="flex justify-between p-6 md:py-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20 items-center bg-black bg-opacity-95 backdrop-blur-md md:h-[5.25rem] lg:h-24 xl:h-28 2xl:h-[8.125rem]">
                <div className='flex items-center md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[6.25rem]'>
                    <Link to={ROUTES.HOME}>
                        <img
                            src={`${aiCertLogo}`}
                            alt="Brand logo"
                            className="object-cover h-5 lg:h-6 xl:h-7 2xl:h-full"
                        />
                    </Link>
                    <nav className="hidden md:flex gap-2 lg:gap-3 xl:gap-6 items-center text-lg font-bold leading-[3rem] shrink-0 normal-case">
                        {NAV_ITEMS_EXCLUDING_LAST.map((nav, index) => (
                            <NavLink
                                to={nav.link}
                                key={`header-${index}`}
                                className="md:text-xs lg:text-sm xl:text-base 2xl:text-lg capitalize shrink-0 hover:text-golden cursor-pointer whitespace-nowrap text-white font-normal">
                                {nav.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div className="flex justify-end items-center text-center md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 ">
                    <button
                        onClick={toggleMenu}
                        className="relative flex flex-col justify-center items-center h-8 w-8 md:hidden cursor-pointer">
                        <span
                            className={`block h-0.5 w-8 bg-white transition-transform duration-500 ease-in-out transform ${
                                isMenuOpen ? 'rotate-45 -translate-x-0.5' : '-translate-y-1.5'
                            }`}></span>
                        <span
                            className={`block h-0.5 w-8 bg-white transition-opacity duration-500 ease-in-out ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                        <span
                            className={`block h-0.5 w-8 bg-white transition-transform duration-500 ease-in-out transform ${
                                isMenuOpen ? '-rotate-45 -translate-x-0.5 -translate-y-1' : 'translate-y-1.5'
                            }`}></span>
                    </button>
                    <Link
                        to={ROUTES.STORE}
                        className="hidden md:flex font-semibold bg-golden whitespace-nowrap transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white px-6 py-3">
                        Get Certified
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    className="flex flex-col -z-10 bg-black transition-all duration-400 bg-opacity-50 backdrop-blur-md
                px-9 pt-24 text-center text-3xl text-white tracking-tight leading-10 gap-6 font-light items-start md:hidden h-screen">
                    {NAV_ITEMS_EXCLUDING_LAST.map((nav, index) => (
                        <NavLink
                            to={nav.link}
                            key={`menu-${index}`}
                            className="uppercase hover:font-medium hover:text-golden cursor-pointer font-extralight"
                            onClick={toggleMenu}>
                            {nav.title}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
