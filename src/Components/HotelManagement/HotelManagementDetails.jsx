import { FaCheck, FaExternalLinkSquareAlt } from "react-icons/fa";
import PortfolioSideNav from "../WebDesignDevelopment/PortfolioSideNav";
// import img from "../../assets/images/software_logo.jpg";
import Image from "next/image";
const HotelManagementDetails = () => {
  const services = [
    { title: "Hotel Management Software", link: <FaExternalLinkSquareAlt /> },
    { title: "Payroll Management", link: <FaExternalLinkSquareAlt /> },
    { title: "Accounting Software", link: <FaExternalLinkSquareAlt /> },
    { title: "Production Management", link: <FaExternalLinkSquareAlt /> },
    { title: "Hospital Management", link: <FaExternalLinkSquareAlt /> },
    { title: "Education ERP", link: <FaExternalLinkSquareAlt /> },
    { title: "HTM Software", link: <FaExternalLinkSquareAlt /> },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 justify-center items-center">
      <div className="grid justify-center grid-cols-1 md:grid-cols-12 items-start gap-5">
        <PortfolioSideNav services={services} />
        <div className="details flex flex-col gap-10 md:col-span-9">
          {/* card */}
          <div className="card relative border-2  p-6 rounded-lg justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <h3 className="text-2xl font-bold mb-4">
              Serve Your Guest Better With Smart Hotel ERP.
            </h3>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec justo rutrum, tristique tortor in, bibendum risus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam nec justo
              rutrum, tristique tortor in, bibendum risus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam nec justo rutrum,
              tristique tortor in, bibendum risus.
            </p>
          </div>

          {/* desc */}
          <div className="flex flex-col md:flex-row gap-10 items-start ">
            {/* image description */}
            <div className="flex justify-center md:justify-start">
              <Image
                width={96}
                height={96}
                src={"/software_logo.jpg"}
                className="max-w-96 m-5 rounded-sm"
                alt=""
              />
            </div>
            {/* text description */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-7 m-5">
                Hotel Booking Software & Website
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                accusantium alias iusto animi quibusdam id tempora
                exercitationem dolorem Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Nesciunt voluptate voluptates, repudiandae
                qui, harum maxime maiores sint nam sunt ad repellat quae aliquam
                veritatis, totam officia. Ea ab vero omnis? magnam? Maiores
                dolor autem
              </p>
            </div>
          </div>

          {/* website development service */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">
              Website Development Service
            </h2>
            <p>
              Complete Web solution for your bussiness. If you looking for best
              website development Company in Bangladesh Contact right now.
            </p>
            <div className="flex md:flex-row flex-col gap-20 items-start justify-start">
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Goverment Website Design</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Goverment Website Design</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <FaCheck />{" "}
                  </span>
                  <span>Corporate Website Development</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelManagementDetails;
