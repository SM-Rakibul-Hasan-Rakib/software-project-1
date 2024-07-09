"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../../..//banner1.jpg";
// import"/banner2.jpg"from "../../../..//banner2.jpg";
// import "/banner4.avif" from "../../../..//banner4.avif";
// import "/download1.png" from "../../../..//download1.png";
// import img4 from "../../../..//download.jpg";
// import "/download2.png" from "../../../..//download2.png";
// import "/download3.png" from "../../../..//download3.png";

import { MdOutlineSettingsInputComponent } from "react-icons/md";

import { MdOutlineSettingsSuggest } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { FaServer } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CompanyBanner from "@/Components/CompanyBanner";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="dark:bg-gray-100 bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Image
                  width={100}
                  height={100}
                  src="/banner1.jpg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold text-blue-700 leading-none sm:text-6xl">
                  SOFTWARE DEVELOPMENT
                </h1>
                <h3 className="mt-6 text-xl mb-8  font-bold text-blue-500 sm:mb-12">
                  For Growing Bussiness
                  <span>
                    <p className="text-black mt-2">
                      Transform your ideas into customer bussiness
                      application.Build Your Software and Mobile App with Us
                    </p>
                  </span>
                </h3>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  font-bold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        {/* swiper-2 */}

        <SwiperSlide>
          <section className="dark:bg-gray-100 bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Image
                  width={100}
                  height={100}
                  src="/banner2.jpg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold text-blue-700 leading-none sm:text-6xl">
                  Do you Need
                </h1>
                <h3 className="mt-6 text-xl mb-8  font-bold text-blue-500 sm:mb-12">
                  Mobile App Development
                  <span>
                    <p className="text-black mt-2">
                      Check our included features and options
                    </p>
                  </span>
                </h3>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  font-bold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        {/* swiper-3 */}
        <SwiperSlide>
          <section className="dark:bg-gray-100 bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Image
                  width={100}
                  height={100}
                  src={"/banner4.avif"}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold text-blue-700 leading-none sm:text-6xl">
                  Do you Need a New
                </h1>
                <h3 className="mt-6 text-xl mb-8  font-bold text-blue-500 sm:mb-12">
                  Website design and Development
                  <span>
                    <p className="text-black mt-2">
                      Check our included features and options
                    </p>
                  </span>
                </h3>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  font-bold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    View More
                  </span>
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      <CompanyBanner></CompanyBanner>
      {/* banner-end */}
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          {/* text-title-soft-tak */}
          <h1 className="text-center font-bold text-4xl text-blue-500 my-10">
            SOFT TASK Is The Best For Your Bussiness Solutions
          </h1>
          <p className="text-center">
            <span className="font-extrabold underline">
              SOFT TASK text-center :{" "}
            </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            corporis quis iste porro nesciunt perspiciatis numquam, quos
            doloribus quidem, rerum fuga officiis ex? Eius et harum pariatur non
            similique deserunt consequuntur qui, ad odit ex eaque, tempora
            minima mollitia, sit amet voluptate. Numquam distinctio eaque vero
            facere enim? Architecto ea consectetur unde nemo obcaecati
            reiciendis explicabo eveniet error sequi id quam officiis, voluptas
            nam, natus harum laboriosam nihil cum accusamus suscipit dolor
            nostrum similique! Esse commodi, eaque vero maxime qui sint
            repudiandae provident reiciendis, tempora mollitia impedit? Beatae
            soluta minima error iste, odit illum ducimus rem nulla aspernatur
            dolor molestiae!{" "}
          </p>
        </div>
      </div>
      {/* card section */}
      <div className="my-12 mt-12">
        {/* card */}
        <div className="w-screen  mx-auto p-3 lg:px-30 sm:px-8  dark:bg-slate-800">
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue text-blue-600">
              OUR READY SOFTWARE
            </h3>
          </div>
          <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <MdOutlineSettingsSuggest className="size-10"></MdOutlineSettingsSuggest>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 text-center pt-3">
                    HRM Payroll Management System
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <HiOutlineComputerDesktop className="size-10"></HiOutlineComputerDesktop>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-center pt-4 text-blue-600">
                    Garements ERP Management System
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <FaUserDoctor className="size-10"></FaUserDoctor>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5 text-center">
                    Hospital management System
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <AiOutlineShoppingCart className="size-10"></AiOutlineShoppingCart>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5  text-center">
                    Retail Point Sale Software (POS)
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <IoIosSchool className="size-10"></IoIosSchool>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5 text-center">
                    School Management Software
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <FaRegBuilding className="size-10"></FaRegBuilding>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600">
                    Bussiness ERP Software
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
          </div>
        </div>

        {/* our core services */}
        <div className="w-screen  mx-auto p-3 lg:px-30 sm:px-8  dark:bg-slate-800">
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue text-blue-600">
              OUR CORE SERVICES
            </h3>
          </div>
          <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <MdOutlineSettingsInputComponent className="size-10"></MdOutlineSettingsInputComponent>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 text-center pt-3">
                    Software Development
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <IoIosApps className="size-10"></IoIosApps>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-center pt-4 text-blue-600 text-center pt-5">
                    Mobile App Development
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <FaRegMoneyBill1 className="size-10"></FaRegMoneyBill1>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5 text-center">
                    e-Commerce Development
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <HiOutlineComputerDesktop className="size-10"></HiOutlineComputerDesktop>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5  text-center">
                    Web Development
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <LiaDigitalTachographSolid className="size-10"></LiaDigitalTachographSolid>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5 text-center">
                    Digital Markting Software
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* card item  */}
            <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-blue-600 bg-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                  <FaServer className="size-10"></FaServer>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                  <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 text-blue-600 pt-5 text-center">
                    Domain Registration Software
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit veritatis molestiae alias repellendus totam
                    molestias distinctio eius voluptatem cum nihil eaque dolore,
                    delectus, fugiat maiores accusantium? Minima magnam dolor
                    neque.
                  </p>
                </div>
                <span className="font-extrabold text-blue-500">
                  read more...
                </span>
              </div>
            </div>
            {/* end card item  */}
          </div>
        </div>

        {/* Techonlagy for permission Development */}
        <div>
          <h1 className="text-center text-blue-500 text-3xl font-bold">
            USING TECHNOLGY FOR PROFESSIONAL DEVELOPMENT
          </h1>
          <div>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg  transform transition duration-500 hover:scale-110">
                      {/* <Image
                      width={100}
                      height={100} src={"/download1.png"} className="w-10 mx-auto" alt="" /> */}
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        PHP Laravel
                      </h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <Image
                        width={100}
                        height={100}
                        src={"/download.jpg"}
                        className="size-10 mx-auto"
                        alt=""
                      />
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        ASP.net C#
                      </h2>
                      {/* <p className="leading-relaxed">Users</p> */}
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      {/* <Image
                      width={100}
                      height={100} src={"/download2.png"} className="w-36 mx-auto" alt="" /> */}
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        SQL Server
                      </h2>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      {/* <Image
                      width={100}
                      height={100} src={"/download3.png"} className="size-11 mx-auto" alt="" /> */}
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        React js
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* smart-software */}
        <div className="p-5 pt-8 border ignore border-gray-200 not-prose dark:border-gray-800 relative bg-gray-50 dark:bg-gray-800">
          <div className="absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200 dark:border-gray-800 shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white dark:bg-black text-gray-400 text-[0.65rem]">
            🤩 Our Amazing Sponsors 👇
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-5 not-prose">
              <a className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn.devdojo.com/sponsors/digital-ocean.svg"
                    alt="DigitalOcean"
                    className="relative h-5 md:h-6"
                  />
                  <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                    <span>View Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 translate-x-0.5 h-3"
                    >
                      <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                    </svg>
                  </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  DigitalOcean offers a simple and reliable cloud hosting
                  solution that enables developers to get their website or
                  application up and running quickly.
                </span>
              </a>
              <a className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn.devdojo.com/sponsors/larajobs.svg"
                    alt="Larajobs"
                    className="relative h-5 md:h-6"
                  />
                  <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                    <span>View Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 translate-x-0.5 h-3"
                    >
                      <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                    </svg>
                  </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  The official Laravel job board. Find the best and most
                  talented Laravel developers by posting your job on the
                  official Laravel job board.
                </span>
              </a>
              <a className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn.devdojo.com/sponsors/larajobs.svg"
                    alt="Larajobs"
                    className="relative h-5 md:h-6"
                  />
                  <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                    <span>View Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 translate-x-0.5 h-3"
                    >
                      <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                    </svg>
                  </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  The official Laravel job board. Find the best and most
                  talented Laravel developers by posting your job on the
                  official Laravel job board.
                </span>
              </a>
              <a className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span className="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div className="flex items-center justify-between w-full mb-4 ">
                  <Image
                    width={100}
                    height={100}
                    src="https://cdn.devdojo.com/sponsors/coin-camp.svg"
                    alt="CoinCamp"
                    className="relative h-5 md:h-6"
                  />
                  <span className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                    <span>View Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 translate-x-0.5 h-3"
                    >
                      <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                    </svg>
                  </span>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Learn how to code your own blockchain and create your own
                  crypto-currency with the CoinCamp interactive and fun online
                  training platform.
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* smart-software-end */}
      </div>
    </div>
  );
}
