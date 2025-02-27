import React from "react";
import PrimaryBtn from "../Components/ui/PrimaryBtn";
import shoes from "../assets/shoes.png";
import flipkart from '../assets/flipkart.png'
import Amazon from '../assets/amazon.png'

import SecondaryBtn from "../Components/ui/SecondaryBtn";
const Home = () => {
  return (
    <div className="w-full ">
      <div className="max-w-6xl mx-auto  flex items-center justify-center  gap-y-8  py-20 lg:flex-row flex-col">
        {/* left side div */}
        <div className=" flex  flex-col justify-between gap-y-10 w-[50vw]">
          {/* heading div */}
          <div className="text-5xl font-bold">
            <h1 className="max-w-[300px]">YOUR FEET DESERVE THE BEST</h1>
          </div>
          {/* paragraph div */}
          <div className="text-lg font-medium">
            <p className="max-w-[450px]">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          {/* button div */}
          <div className="flex lg:flex-row md:flex-row flex-col gap-4">
            <div>
              <PrimaryBtn text="Shop Now" />
            </div>
            <div>
              <SecondaryBtn text={"Category"} />
            </div>
          </div>
          <div className="space-y-3">
            <h4>
                Also availabel on
            </h4>
            <div className="flex items-center gap-4">
                <img className="h-6 w-6" src={flipkart} alt="" />
                <img className="h-6 w-6" src={Amazon} alt="" />
            </div>
          </div>
        </div>

        {/* right side div */}
        <div className="flex justify-center items-center ">
          <img
            className="w-[40vw] drop-shadow-[10px_20px_30px_rgba(0,0,0,0.5)]"
            src={shoes}
            alt="Shoe"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
