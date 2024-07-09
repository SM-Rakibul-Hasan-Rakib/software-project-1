/* eslint-disable react/prop-types */

const PortfolioSideNav = ({services}) => {
    return (
        <div className="service border-2 md:col-span-3">
        <div className="w-full bg-blue-700 text-white p-2 mb-1">
          <h3 className="text-2xl font-bold">Our Service</h3>
        </div>
        <div className="flex flex-col gap-1">
          {services.map((item, inx) => (
            <div
              key={inx}
              className="w-full hover:bg-blue-700 text-black hover:text-white p-2 mb-1"
            >
              <h3 className="text-xl  flex gap-2 items-center ">
                <span>{item.link}</span> <span>{item.title}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PortfolioSideNav;