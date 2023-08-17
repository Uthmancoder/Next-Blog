import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="ml-0 md:ml-16">
        <h1 className="text-4xl md:text-6xl  font-bold my-2 ">Our Works</h1>
        <p className="text-md md:text-2xl my-2">Choose a gallery</p>
      </div>
      {children}
    </div>
  );
};

export default layout;
