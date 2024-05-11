import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import navigation from "../../models/routes";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../../assets/images/logo/logo.png";
import { BookmarkSquareIcon, UserIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sm:hidden flex bg-gradient-to-r from-blue-500 from-10% via-sky-600 via-30% to-indigo-700 to-80% items-center py-4 justify-between">
          <Link className="mx-6 text-2xl flex justify-start items-center" to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="flex flex-row">
            <img src={logo} alt="logo" className="shadow-md rign-1 w-6 h-6 rounded-full mx-2" />
            <span className="text-white sm:text-xl text-base font-medium">PristineResume</span>
          </div>
          <div className="flex flex-row">
            <button type="button" className="relative rounded-full bg-indigo-700 p-1 text-gray-300 hover:text-white">
              <BookmarkSquareIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-2 mr-2">
              <div>
                <Menu.Button className="relative flex rounded-full bg-indigo-700 text-sm text-gray-300 hover:text-white  border p-0.5 border-slate-300">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserIcon className="h-5 w-5 rounded-full" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div
          className={`h-full bg-gradient-to-r from-blue-500 from-10% via-sky-600 via-30% to-indigo-700 to-80% w-44 flex justify-center fixed top-0 ${
            sidebar ? "left-0" : "left-[-20rem]"
          } transition-all ease-in-out delay-150 duration-300 z-10`}
        >
          <div className="w-full">
            <Link className="mx-8 py-4 text-2xl flex justify-start items-center" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {navigation.map((item, index) => {
              return <SubMenu showSidebar={showSidebar} item={item} key={index} />;
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
