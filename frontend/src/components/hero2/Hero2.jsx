import React from "react";
import bgVideo from "../../assets/video/hero.mp4"

const Hero2 = () => {
  return (
    <>
      <div class="md:px-36 px-8 md:py-28 py-5">
        <div class="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div class="flex flex-col gap-5 justify-center p-5">
            <h1 class="text-4xl md:text-5xl font-bold">Find The</h1>
            <h1 class="text-4xl md:text-5xl font-bold">Hidden Wonders of</h1>
            <h1 class="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              Sri Lanka
            </h1>
            <p class="mt-4">
              Sri Lanka is a popular tourist destination for people from all
              over the world. Visitors come to Sri Lanka to relax on its
              beautiful beaches, go on adventurous safaris, explore ancient
              ruins, and experience the country's rich culture.
            </p>
            <button className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Get started
            </button>
          </div>
          <div class="">
            <video
              class="rounded-3xl h-[100%] w-full object-cover"
              autoPlay
              muted
              loop>
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
