import React from "react";

type Props = {
  image1: string;
  image2: string;
  image3: string;
};

function Frame1({ image1, image2, image3 }: Props | null) {
  return (
    <div className="h-144 w-48 bg-black items-center flex flex-col p-3 gap-2">
      <div className="items-center flex-col flex">
        <div className="text-white text-md">Saturday, March 28</div>
        <div className="text-white text-6xl font-bold">11:27</div>
      </div>

      <div className="flex flex-col items-center w-full gap-3 h-full">
        <div className="bg-red-500 w-full h-full items-center">
          {image1 && (
            <img src={image1} className="w-full h-full object-cover" />
          )}{" "}
        </div>
        <div className="bg-red-500 w-full h-full">
          {image2 && (
            <img src={image2} className="w-full h-full object-cover" />
          )}{" "}
        </div>
        <div className="bg-red-500 w-full h-full">
          {image3 && (
            <img src={image3} className="w-full h-full object-cover" />
          )}{" "}
        </div>
      </div>
      <div className="w-full bg-blue-500 h-32">a</div>
    </div>
  );
}

export default Frame1;
