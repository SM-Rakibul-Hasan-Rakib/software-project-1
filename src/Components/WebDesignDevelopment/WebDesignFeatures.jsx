/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";

const WebDesignFeatures = ({cards, title, desc}) => {
  
  return (
    <div className="max-w-7xl mx-auto pb-20 px-4">
      <div className="flex mb-6 flex-col text-center gap-6">
        <h1 className="text-3xl ">{title}</h1>
        <p>
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((item, inx) => (
          <div
            key={inx}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-4">
              <IoIosSearch className="text-4xl text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-600" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignFeatures;
