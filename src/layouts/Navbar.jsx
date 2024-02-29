/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../ui/Logo";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Services", to: "services", current: false },
  { name: "Menu", to: "menu", current: false },
  { name: "Contact", to: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between mx-auto">
        <div className="flex lg:hidden">
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            className="h-8 w-8 bg-blue-500 rounded-full cursor-pointer text-white sm:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
        <div className="hidden mx-auto sm:flex items-center justify-between sm:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 text-gray-800 cursor-pointer
              hover:text-blue-500 font-inter"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="register"
            className="flex px-4 py-2 items-center rounded-2xl cursor pointer bg-blue-500 hover:bg-blue-800 text-white"
          >
            Sign Up
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-5`0 w-full overflow-y-auto bg-white px-6 py-6 
          sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 sm:hidden"
        >
          <div className="flex items-center justify-between">
            <div>
              <Logo />
            </div>

            <XMarkIcon
              className="h-8 w-8 cursor-pointer"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />

            <span className="sr-only">Close menu</span>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7
                    text-gray-400 hover:bg-gray-900 hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/register"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7
                  text-gray-400 hover:text-gray-900 hover:cursor-pointer hover:bg-gray-400"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
