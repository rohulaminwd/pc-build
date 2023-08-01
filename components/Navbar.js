import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";


import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Navbar = ({ logout, user, cart, open }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div>
      <div className="container sticky top-0 bg-white z-10 shadow-lg mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
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
          <span className="ml-3 text-xl font-extrabold">BUILD CORNER</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">

          <div class="flex items-center justify-center mr-96">
            <div>
              <Link href="/" className="mr-4 hover:text-gray-900 pr-8">
                HOME
              </Link>
            </div>

            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div className="pr-8">
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

                          <Link href="/category/Processor" className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}>
                            PROCESSOR
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/category/Motherboard" className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}>
                            MOTHERBOARD
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={"/category/RAM"} className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}>
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

                          <Link href={"/category/Storage"} className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}>
                            STORAGE DEVICE
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (

                          <Link href={"/category/Monitors"} className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}>
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
            <div className="pl-4">
              <Link href="/pcBuilder">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4">
                  PC BUILDER
                </button>
              </Link>
            </div>
          </div>

          {/* <Link
          href={"/category/Peripherals"}
          className="mr-5 hover:text-gray-900"
        >
          Peripherals
        </Link> */}
          <div className="flex justify-center items-center space-x-3 cursor-pointer  hover:text-gray-900">
            {user.value && (
              <RxAvatar
                onMouseOver={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
                className="text-3xl"
              />
            )}
            {/* <div
            className="relative flex items-center justify-center"
            onClick={open}
          >
            <AiOutlineShoppingCart className="text-3xl" />
            {Object.keys(cart).length > 0 && (
              <span
                className="
             absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center
            "
              >
                {Object.keys(cart).length}
              </span>
            )}
          </div> */}

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

export default Navbar;



<div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    type="button"
    id="dropdownMenuButton1tx"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
    Dropdown item text
    <span class="ml-2 w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1tx"
    data-te-dropdown-menu-ref>
    <span
      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-200"
    >Dropdown item text</span
    >
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
      >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
      >Another action</a
      >
    </li>
  </ul>
</div>