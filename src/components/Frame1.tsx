import React, { forwardRef } from "react";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

const Frame1 = forwardRef<HTMLDivElement, Props>(
  ({ image1, image2, image3 }, ref) => {
    return (
      <div
        ref={ref}
        className="h-144 w-48 items-center flex flex-col p-3 gap-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="items-center flex-col flex">
          <div className="text-white text-md">Saturday, March 28</div>
          <div className="text-white text-6xl font-bold">11:27</div>
        </div>

        <div className="flex flex-col items-center w-full gap-3 h-full">
          <div
            className="w-full h-full items-center"
            style={{ backgroundColor: "red" }}
          >
            {image1 && (
              <img src={image1} className="w-full h-full object-cover" />
            )}{" "}
          </div>
          <div className="w-full h-full" style={{ backgroundColor: "red" }}>
            {image2 && (
              <img src={image2} className="w-full h-full object-cover" />
            )}{" "}
          </div>
          <div className="w-full h-full" style={{ backgroundColor: "red" }}>
            {image3 && (
              <img src={image3} className="w-full h-full object-cover" />
            )}{" "}
          </div>
        </div>
        <div className="w-full h-32" style={{ backgroundColor: "blue" }}>
          a
        </div>
      </div>
    );
  },
);

export default Frame1;
