import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-lg font-semibold">
                  Trvel with us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
                </h2>
                <p className="text-body-color mb-8 text-base">
                  Embrace the ethos of 'Take only memories, leave only
                  footprints' with us. Immerse yourself in sustainable journeys
                  that preserve the beauty of destinations. Create lasting
                  memories while minimizing your environmental impact. Join us
                  in exploring the world responsibly, leaving behind nothing but
                  cherished moments and the gentle imprints of your footsteps.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.telegraph.co.uk/content/dam/Travel/2017/July/Leopard-srilanka-Getty.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/55697ab8e4b084f6ac0581ef/1559901655865-2WD7VFL9ISM6RO1JNPOW/sri-lanka-620x330.jpg?format=1500w"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/05/Galle-Fort-Kengoo-Sri-Lanka2.jpg?resize=800%2C599&ssl=1"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
