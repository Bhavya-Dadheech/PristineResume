import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const location = useLocation();

  return (
    <>
      <Link
        className={`shadow flex items-center justify-between px-5 py-4 text-white list-none text-base transition-colors duration-300 hover:bg-blue-600 hover:border-green-500 cursor-pointer ${
          item.path === location.pathname ? "bg-blue-600" : ""
        }`}
        to={item.path}
        onClick={() => {
          if (item.subNav) {
            showSubnav();
          } else {
            showSidebar();
          }
          // Run your second function here
        }}
      >
        <div>
          {item.icon}
          <span className="ml-4">{item.title}</span>
        </div>
        <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              className="bg-gray-800 px-12 py-2 flex items-center text-white text-base transition-colors duration-300 hover:bg-green-500 cursor-pointer"
              to={item.path}
              key={index}
              onClick={showSidebar}
            >
              {item.icon}
              <span className="ml-4">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
