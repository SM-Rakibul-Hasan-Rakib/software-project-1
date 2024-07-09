
import CommonNav from "../../../src/Components/CommonNav";
import HotelManagementDetails from "../../../src/Components/HotelManagement/HotelManagementDetails";
import Banner from "../../../src/Components/Portfolio/Banner";
// import WebDesignFeatures from "../../../src/Components/WebDesignDevelopment/WebDesignFeatures";
import { data } from "../../../src/assets/Data";
// import PortfolioSideNav from "../../Components/WebDesignDevelopment/PortfolioSideNav";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import img from "../../../public/download.png"



const Service = () => {

    const cards = [
        {
          title: "Web Booking Engine",
          subtitle: "Online Reservaren System",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
        },
        {
          title: "Billing Management System",
          subtitle: "Billing and Invoicing",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
        },
        {
          title: "Front Office Management",
          subtitle: "Front Desk Manager",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
        },
        {
          title: "Reporting",
          subtitle: "Reporting",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
        },
        {
          title: "Inventory Management",
          subtitle: "Inventory Management",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate magnam velit similique ut! Consectetur nulla nam voluptatum, debitis itaque minima corrupti illum ipsum ratione voluptates eius quidem placeat repudiandae.",
        },
      
      ];

      const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque libero alias, sunt dolor animi ipsum sint explicabo nihil iure  accusamus, atque non quibusdam, ratione assumenda aspernatu'

  return (
    <div>
      <Banner
        title={"Hotel Management Software"}
        subTitle={"WE OFFER"}
        data={data.hotel_management_banner_ul_data}
      />
      <CommonNav
        title={"Best Hotel Management System in Bangladesh"}
        link={"Order Now"}
      />
      <div className="flex flex-col gap-2 text-center mt-16">
        <h1 className="text-4xl ">Hotel ERP Management</h1>
        <p>An innovative Management System</p>
      </div>
      
      <HotelManagementDetails/>
      {/* <WebDesignFeatures title={"Hotel ERP Feature"} desc={desc}  cards={cards} /> */}
      <div className="max-w-7xl mx-auto">
        <div>
   
             <br />
             <div className="flex flex-col">
      <div className="">
      </div>
 
    </div>
        </div>
      </div>

    </div>
  );
};

export default Service;



