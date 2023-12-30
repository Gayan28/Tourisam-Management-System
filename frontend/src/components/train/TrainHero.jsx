import React from "react";
import trainMainImg  from "../../assets/TrainImages/HeroTrain.jpg"

const TrainHero = ()=>{
    return (
      <div
        className="h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover"
        style={{ backgroundImage: `url(${trainMainImg})` }}>
        <div className="p-8 pt-28 md:p-24 md:pt-36 lg:p-36">
          <h2 className="text-3xl md:text-5xl  font-extrabold uppercase  text-[#41A4FF]">
            Easily Book your
            <br />
            Train Tickets online
            <br />
            with
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-[#DEEFFF] py-4">
            Travely
          </h1>
          <p className="text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify text-white">
            Embark on a seamless journey through the breathtaking landscapes of
            Sri Lanka with our hassle-free online train ticket booking. Elevate
            your travel experience from the comfort of your screen—effortlessly
            secure your seat on the island's iconic railways. Discover
            convenience, reliability, and the joy of exploring Sri Lanka by
            train, all at your fingertips.
          </p>
        </div>
      </div>
    );
}


export default TrainHero;