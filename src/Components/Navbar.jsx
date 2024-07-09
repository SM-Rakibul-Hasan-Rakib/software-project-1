"use client";

import { useState } from "react";

// import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section className="py-2 bg-[#1d294f] text-white text-center hidden lg:flex mx-auto gap-6 justify-center items-center px-10">
        <p className="text-sm flex items-center">
          <IoIosCall className="mr-2" /> 01749-508007
        </p>
        <p className="text-sm flex items-center">
          <IoMailOutline className="mr-2" /> softtaskltd@gmail.com
        </p>
        <p className="text-sm flex items-center">
          <IoLocationOutline className="mr-2" /> Basabo Madertek Rd, Basabo,
          Dhaka - 1214, Bangladesh
        </p>
      </section>

      <header className="flex border-b-4 border-t-2 border-t-blue-600  border-b-blue-600 fixed relative  bg-white font-sans min-h-[70px] tracking-wide w-full z-50">
        <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            className={`max-lg:hidden ${
              isOpen ? "block" : "hidden"
            } fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-50`}
          />

          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-50 rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu></GiHamburgerMenu>

            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg> */}
          </button>

          <ul
            className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            {/* Your menu items */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <Link
                    href="/about"
                    className="hover:text-[#007bff] text-gray-600 text-[15px]
                    font-bold block"
                  >
                    About Us
                  </Link>
                </li>
                <li className="border-b py-2 ">
                  <Link
                    href="/service"
                    className="hover:text-[#007bff] text-gray-600 text-[15px]
                    font-bold block"
                  >
                    Our Best Services
                  </Link>
                </li>

                <li className="border-b py-2 ">
                  <Link
                    href="/portfolio"
                    className="hover:text-[#007bff] text-gray-600 text-[15px]
                    font-bold block"
                  >
                    Portfolio
                  </Link>
                </li>

                <li className="border-b py-2 ">
                  <Link
                    href="/price"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="border-b py-2 ">
                  <Link
                    href="/teams"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Teams
                  </Link>
                </li>

                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Become Any Agent
                  </a>
                </li>
              </ul>
            </li>
            {/* services */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Website Design & Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    eCommerce Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    eCommerce Leanding page Design
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Multi vendor eCommerce Developer
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    News Paper Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Logo & graphics Design
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    CyberSecurity Services
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Website Maintaince
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Websites Template
                  </a>
                </li>
              </ul>
            </li>
            {/* software */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Software
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Software Development Service
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Human Resource Management
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Hospital Management Software{" "}
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Garments ERP
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Bussiness ERP Softwares
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Sales and Distribution ERP Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    CyberSecurity Services
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Hotel Management Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Garments Accessories Manufa
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    School Management Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Producation Management Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Account & Inventory Management
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Document Management System
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Payroll management Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Customer Relationsship-CRM
                  </a>
                </li>
              </ul>
            </li>
            {/* Retail POS */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Retail POS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Retail POS Software{" "}
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Retail-Point Of Sales (POS)-Smart Account
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    POS Software & App-smart Dokani
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Resturent Management
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Pharmacy Management Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Tiles Sanitary POS Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Electriocs Shop POS Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Footwear POS Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    ISP & Cable TV Billing Software
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Beauty & Spa Shop Software
                  </a>
                </li>
              </ul>
            </li>
            {/* Mobile App */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Mobile App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Online Doctor App Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Online Learning Platform Development
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Smart Dokani -Retail POS App
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    HRM MObile App
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Islamic Life-Al Quran App
                  </a>
                </li>{" "}
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Fm Radio
                  </a>
                </li>
              </ul>
            </li>
            {/* Marketing */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Markting
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Email Marketing
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    SMS Markting
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Search Enginr Optimzation(SEO)
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Social Media Markting
                  </a>
                </li>
              </ul>
            </li>
            {/* Hosting */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Hosting
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Website Hosting
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Reseller Hosting
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Cloud VPH Hosting
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Email Hosting Service
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Website Registartion
                  </a>
                </li>
              </ul>
            </li>
            {/* Training */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Training
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    ICT Tranining & Courses
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    PHP Larvel Web Application Courses
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Mobile App Development Courses
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Web Design Development Courses
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Digital Markting Courses
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Polytechnic Industrial Attachment
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Jobs Opportunity
                  </a>
                </li>
              </ul>
            </li>
            {/* Device */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Device
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>
              {/* Submenu items */}
              <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    Biometrics Attendance
                  </a>
                </li>
                <li className="border-b py-2 ">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                  >
                    POS Device
                  </a>
                </li>
              </ul>
            </li>
            {/* contact */}
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
              >
                Contact Us
              </a>
            </li>
            {/* Add more menu items as needed */}
          </ul>

          <div className="flex items-center space-x-8 max-lg:ml-auto">
            {/* Your other components */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
