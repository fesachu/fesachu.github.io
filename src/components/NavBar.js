// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/about" className="ml-3 text-xl">
            <img href="./src/images/logo.png"></img>
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="/about" className="mr-5 hover:text-white">
            Gaming
          </a>
          <a href="/gaming" className="mr-5 hover:text-white">
            Gaming
          </a>
          <a href="/tech" className="mr-5 hover:text-white">
            Tech
          </a>
          <a href="/design" className="mr-5 hover:text-white">
            Design
          </a>
        </nav>
      
      </div>
    </header>
  );
}