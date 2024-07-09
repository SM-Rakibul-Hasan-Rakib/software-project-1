/* eslint-disable react/prop-types */
const CommonNav = ({title, link}) => {
  return (
    <div className="bg-blue-700 h-24 flex justify-around -mt-52 items-center">
      <div>
        <h3 className="md:text-2xl text-white text-sm p-7">{title}</h3>
      </div>
      <div className="h-full bg-black hidden md:block text-white">
        <button className="h-full px-8 font-bold md:text-2xl text-sm">{link}</button>
      </div>
    </div>
  );
};

export default CommonNav;
