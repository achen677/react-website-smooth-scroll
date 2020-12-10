import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = ({ children }) => (
  <nav className="bg-black h-20 -mt-20 flex justify-center items-center text-base sticky top-0 z-10 transition-all ease-out duration-800">
    {children}
  </nav>
);

export const NavbarContainer = ({ children }) => (
  <div className="flex justify-between h-20 z-10 w-full px-32 max-w-screen-lg">
    {children}
  </div>
);

export const NavLogo = ({ children, ...rest }) => (
  <LinkRouter
    {...rest}
    className="text-white justify-self-start cursor-pointer text-2xl flex items-center ml-0.5 font-bold no-underline"
  >
    {children}
  </LinkRouter>
);

export const MobileIcon = ({ children, ...rest }) => (
  <div
    {...rest}
    className="hidden md:block md:absolute md:top-0 md:right-0 md:transform md:-translate-x-full md:translate-y-2/3 md:text-3xl md:cursor-pointer md:text-white"
  >
    {children}
  </div>
);

export const NavMenu = ({ children }) => (
  <ul className="flex items-center list-none text-center -ml-5 md:hidden">
    {children}
  </ul>
);

export const NavItem = ({ children }) => <li className="h-20">{children}</li>;

export const NavLinks = ({ children, to }) => (
  <LinkScroll
    className="text-white flex items-center py-0 px-4 h-full cursor-pointer active:border-solid active:border-3 active:border-green-500"
    to={to}
  >
    {children}
  </LinkScroll>
);

export const NavBtn = ({ children }) => (
  <nav className="flex items-center md:hidden">{children}</nav>
);

export const NavBtnLink = ({ children, ...rest }) => (
  <LinkRouter {...rest} className="btn-green">
    {children}
  </LinkRouter>
);
