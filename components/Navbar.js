import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("0");
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function stickNavbar() {
    let windowHeight = window.scrollY;
    windowHeight > 200 ? setStickyClass("sticky-nav") : setStickyClass("");
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const linkItem = (
    <>
      <li>
        <Link href="/" className=" hover:text-gray-900">
          HOME
        </Link>
      </li>
      <li className="z-50">
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div className="">
              <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                CATEGORIES
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
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
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/category/Processor"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        PROCESSOR
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/category/Motherboard"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        MOTHERBOARD
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/category/RAM"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        RAM
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/category/PowerSupply"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        POWER SUPPLY
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/category/Storage"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        STORAGE DEVICE
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/category/Monitors"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        MONITOR
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={"/category/GraphicsCard"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        OTHERS
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </li>
      <li>
        <Link href="/pcBuilder">
          <button class="bg-transparent hover:text-purple-500 font-semibold">
            PC BUILDER
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={` ${stickyClass} duration-300 z-50 font-bold bg-base-100 w-full`}
    >
      <div className="navbar mx-auto container bg-[#ffffffbb] rounded-lg z-50 border-b ">
        <div className="navbar-start">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray"
          >
            <div>
              <Image
                height={40}
                src="/logo1.png"
                alt="logo"
                width={40}
                className="scale-150"
              />
            </div>
            <span className="ml-3 text-xl font-extrabold">PC</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              {linkItem}
            </ul>
          </div>
          <Link href={"/Login"}>
            <button className="bg-gray-500 hover:bg-yellow-800 text-white font-bold p-2 rounded">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
