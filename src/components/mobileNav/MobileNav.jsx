import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`mobileNav ${
        isOpen ? "inset-[0_0_0_auto]" : "inset-[-100%_-100%_0_auto]"
      } fixed  px-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 z-50 text-center flex justify-center items-center flex-col gap-4 duration-200`}
    >
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
      <NavLink to={"*"}>404</NavLink>
      <NavLink to={"/contact"}>contact</NavLink>
      <span
        className="absolute inset-[4%_4%_auto_auto]"
        onClick={() => setIsOpen(false)}
      >
        X
      </span>
    </div>
  );
};

export default memo(MobileNav);
