import CommonNav from "@/Components/CommonNav";
import HotelManagementDetails from "@/Components/HotelManagement/HotelManagementDetails";
import Banner from "@/Components/Portfolio/Banner";
// import WebDesignFeatures from "../../../src/Components/WebDesignDevelopment/WebDesignFeatures";
// import { data } from "../../../src/assets/Data";
// import PortfolioSideNav from "../../Components/WebDesignDevelopment/PortfolioSideNav";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
// import img from "../../../public/download.png";

const About = () => {
  return (
    <div className=" mx-auto">
      <Banner
        title={"Hotel Management Software"}
        subTitle={"WE OFFER"}
        // data={data.hotel_management_banner_ul_data}
      />
      <CommonNav
        title={"Best Hotel Management System in Bangladesh"}
        link={"Order Now"}
      />
      <div className="flex flex-col gap-2 text-center mt-16">
        <h1 className="text-4xl ">Hotel ERP Management</h1>
        <p>An innovative Management System</p>
      </div>
      <HotelManagementDetails />
      {/* <WebDesignFeatures title={"Hotel ERP Feature"} desc={desc}  cards={cards} /> */}
      <div className="max-w-7xl mx-auto">
        <div>
          <br />
          <div className="flex flex-col">
            <div className=""></div>
            <div className="bg-white py-8">
              <div className="container mx-auto px-4 flex flex-col md:flex-row">
                <div className="w-full md:w-3/4 px-4">
                  <div className="prose max-w-none ">
                    <h1 className="text-blue-500  my-4 text-xl font-bold">
                      Who Are We?
                    </h1>
                    <p>
                      <span className="text-blue-500 font-bold">
                        SOFT-TASK :{" "}
                      </span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla facilisi. Sed sit amet feugiat eros, eget eleifend
                      dolor. Proin maximus bibendum felis, id fermentum odio
                      vestibulum id. Sed ac ligula eget dolor consequat
                      tincidunt. Nullam fringilla ipsum et ex lacinia, at
                      bibendum elit posuere. Aliquam eget leo nec nibh mollis
                      consectetur.
                    </p>
                    <p>
                      Suspendisse potenti. Mauris euismod, magna sit amet
                      aliquam dapibus, ex sapien porta nisl, vel auctor orci
                      velit in risus. Fusce gravida bibendum dui, id volutpat
                      felis dignissim a. Duis sagittis, arcu ac convallis
                      bibendum, neque dolor suscipit dolor, non malesuada magna
                      orci a mauris. Proin sollicitudin diam eu enim tincidunt
                      dapibus. Aliquam pharetra purus mauris, id lacinia mi
                      malesuada ut. Integer dignissim, urna nec scelerisque
                      feugiat, lacus sapien tincidunt sem, sed luctus enim
                      libero vel nunc. Vivamus ornare, felis quis feugiat
                      luctus, orci justo auctor urna, et elementum orci dolor ac
                      ante. Ut varius sapien nec fringilla sodales. Suspendisse
                      lacinia, metus eu suscipit lobortis, enim sapien commodo
                      sapien, non facilisis urna elit eget elit.
                    </p>
                    <p>
                      Nulla facilisi. Sed venenatis pretium ante, sed tempor
                      turpis sagittis ac. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Integer vel diam arcu. Maecenas bibendum efficitur ex sit
                      amet tristique. Nulla vel sapien euismod, bibendum velit
                      id, facilisis magna. Sed vestibulum nisi vitae justo
                      congue, eu bibendum augue interdum. Nam quis orci nec
                      nulla posuere facilisis. Etiam feugiat ligula quis est
                      auctor, et sagittis orci elementum. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere cubilia
                      Curae; Sed gravida neque vel tellus volutpat, vel laoreet
                      lacus commodo. Vivamus quis enim leo.
                    </p>
                  </div>
                </div>

                <div className="service border-2 md:col-span-3">
                  <div className="w-full bg-blue-700 text-white p-2 mb-1">
                    <h3 className="text-2xl font-bold text-center pr-5">
                      Our Service
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>{" "}
                        WebSite Design
                      </h3>
                    </div>
                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>{" "}
                        e-Commerce Development
                      </h3>
                    </div>

                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
                        Andorid App Development
                      </h3>
                    </div>
                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
                        Domain And Hosting
                      </h3>
                    </div>

                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
                        Digital Marketing
                      </h3>
                    </div>

                    <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
                      <h3 className="text-xl  flex gap-2 items-center ">
                        <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
                        Software Development
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import CommonNav from "@/Components/CommonNav";
// import HotelManagementDetails from "@/Components/HotelManagement/HotelManagementDetails";
// import Banner from "@/Components/Portfolio/Banner";
// import React from "react";
// import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

// const page = () => {
//   return (
//     <div className=" mx-auto">
//       <Banner
//         title={"Hotel Management Software"}
//         subTitle={"WE OFFER"}
//         // data={data.hotel_management_banner_ul_data}
//       />
//       <CommonNav
//         title={"Best Hotel Management System in Bangladesh"}
//         link={"Order Now"}
//       />
//       <div className="flex flex-col gap-2 text-center mt-16">
//         <h1 className="text-4xl ">Hotel ERP Management</h1>
//         <p>An innovative Management System</p>
//       </div>
//       <HotelManagementDetails />
//       {/* <WebDesignFeatures title={"Hotel ERP Feature"} desc={desc}  cards={cards} /> */}
//       <div className="max-w-7xl mx-auto">
//         <div>
//           <br />
//           <div className="flex flex-col">
//             <div className=""></div>
//             <div className="bg-white py-8">
//               <div className="container mx-auto px-4 flex flex-col md:flex-row">
//                 <div className="w-full md:w-3/4 px-4">
//                   <div className="prose max-w-none ">
//                     <h1 className="text-blue-500  my-4 text-xl font-bold">
//                       Who Are We?
//                     </h1>
//                     <p>
//                       <span className="text-blue-500 font-bold">
//                         SOFT-TASK :{" "}
//                       </span>{" "}
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Nulla facilisi. Sed sit amet feugiat eros, eget eleifend
//                       dolor. Proin maximus bibendum felis, id fermentum odio
//                       vestibulum id. Sed ac ligula eget dolor consequat
//                       tincidunt. Nullam fringilla ipsum et ex lacinia, at
//                       bibendum elit posuere. Aliquam eget leo nec nibh mollis
//                       consectetur.
//                     </p>
//                     <p>
//                       Suspendisse potenti. Mauris euismod, magna sit amet
//                       aliquam dapibus, ex sapien porta nisl, vel auctor orci
//                       velit in risus. Fusce gravida bibendum dui, id volutpat
//                       felis dignissim a. Duis sagittis, arcu ac convallis
//                       bibendum, neque dolor suscipit dolor, non malesuada magna
//                       orci a mauris. Proin sollicitudin diam eu enim tincidunt
//                       dapibus. Aliquam pharetra purus mauris, id lacinia mi
//                       malesuada ut. Integer dignissim, urna nec scelerisque
//                       feugiat, lacus sapien tincidunt sem, sed luctus enim
//                       libero vel nunc. Vivamus ornare, felis quis feugiat
//                       luctus, orci justo auctor urna, et elementum orci dolor ac
//                       ante. Ut varius sapien nec fringilla sodales. Suspendisse
//                       lacinia, metus eu suscipit lobortis, enim sapien commodo
//                       sapien, non facilisis urna elit eget elit.
//                     </p>
//                     <p>
//                       Nulla facilisi. Sed venenatis pretium ante, sed tempor
//                       turpis sagittis ac. Pellentesque habitant morbi tristique
//                       senectus et netus et malesuada fames ac turpis egestas.
//                       Integer vel diam arcu. Maecenas bibendum efficitur ex sit
//                       amet tristique. Nulla vel sapien euismod, bibendum velit
//                       id, facilisis magna. Sed vestibulum nisi vitae justo
//                       congue, eu bibendum augue interdum. Nam quis orci nec
//                       nulla posuere facilisis. Etiam feugiat ligula quis est
//                       auctor, et sagittis orci elementum. Vestibulum ante ipsum
//                       primis in faucibus orci luctus et ultrices posuere cubilia
//                       Curae; Sed gravida neque vel tellus volutpat, vel laoreet
//                       lacus commodo. Vivamus quis enim leo.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="service border-2 md:col-span-3">
//                   <div className="w-full bg-blue-700 text-white p-2 mb-1">
//                     <h3 className="text-2xl font-bold text-center pr-5">
//                       Our Service
//                     </h3>
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>{" "}
//                         WebSite Design
//                       </h3>
//                     </div>
//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>{" "}
//                         e-Commerce Development
//                       </h3>
//                     </div>

//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
//                         Andorid App Development
//                       </h3>
//                     </div>
//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
//                         Domain And Hosting
//                       </h3>
//                     </div>

//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
//                         Digital Marketing
//                       </h3>
//                     </div>

//                     <div className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1">
//                       <h3 className="text-xl  flex gap-2 items-center ">
//                         <BsFillArrowUpRightSquareFill className="bg-black text-white text-2xl "></BsFillArrowUpRightSquareFill>
//                         Software Development
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
