import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
  FaChartBar,
  FaMoneyBillAlt,
  FaRssSquare,
  FaStar,
  FaCog,
  FaSignOutAlt,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import logo from "../assets/logo1.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { url } = usePage();

  const Menus = [
    { title: "Overview", src: FaChartBar, href: route("dashboard") },
    { title: "Banks", src: FaMoneyBillAlt, href: route("bank.index") },
    { title: "Blogs", src: FaRssSquare, href: route("blog.index") },
    { title: "Reviews", src: FaStar, href: route("user.index") },
    { title: "Settings", src: FaCog, href: route("user.index") },
    { title: "Logout", src: FaSignOutAlt, href: route("user.index"), gap: true },
    
                        
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full p-1 ${
            !open ? "bg-white" : "bg-dark-purple"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaAngleLeft className="text-dark-purple" />
          ) : (
            <FaAngleRight className="text-dark-purple" />
          )}
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="Logo"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-600 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${
                Menu.href === url
                  ? "bg-light-white text-indigo-600 hover:bg-light-indigo hover:text-indigo-600"
                  : "hover:bg-light-indigo hover:text-indigo-600"
              }`}
            >
              <Link href={Menu.href} className="flex items-center gap-x-4 w-full">
                <Menu.src className="text-2xl" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;