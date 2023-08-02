import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar2 = ({ logout, user, cart, open }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div>
      <div className="container sticky top-0 bg-white z-10 shadow-lg mx-auto flex p-3 items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray mb-4 md:mb-0"
        >
          <Image
            height={40}
            src="/logo1.png"
            alt="logo"
            width={40}
            className="scale-150"
          />
          <span className="ml-3 hidden sm:block text-xl font-extrabold">
            BUILD CORNER
          </span>
        </Link>
        <nav className="md:ml-auto flex items-center text-base justify-center font-semibold">
          <div class="flex items-center justify-center mr-96">
            <div>
              <Link href="/" className=" hover:text-gray-900">
                HOME
              </Link>
            </div>

            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div className="">
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
            <div className="">
              <Link href="/pcBuilder">
                <button class="bg-transparent hover:text-purple-500 font-semibold">
                  PC BUILDER
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-3 cursor-pointer  hover:text-gray-900">
            {user.value && (
              <RxAvatar
                onMouseOver={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
                className="text-3xl"
              />
            )}

            {!user.value && (
              <Link href={"/Login"}>
                <button className="bg-gray-500 hover:bg-yellow-800 text-white font-bold p-2 rounded">
                  Login
                </button>
              </Link>
            )}
          </div>
          {dropDown && (
            <div
              onMouseOver={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
              className="absolute lg:top-10  lg:right-4 md:top-28 md:right-64 rounded-md bg-gray-100 z-10 shadow-md top-36 right-12"
            >
              <ul className="font-semibold rounded-md text-gray-900 cursor-pointer">
                <li className="p-2 font-bold border-b border-black">
                  Hello, {user.name}
                </li>
                <Link href={"/MyOrders"}>
                  <li className="p-2 hover:text-blue-500 border-b border-black">
                    My Orders
                  </li>
                </Link>
                <Link href={"/Profile"}>
                  <li className="p-2 hover:text-blue-500 border-b border-black">
                    Profile
                  </li>
                </Link>
                <li onClick={logout} className="p-2 hover:text-red-600 ">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
