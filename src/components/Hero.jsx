import React from 'react';

const Hero = () => {
  return (
    <div
      name="home"
      className="w-screen h-full flex flex-col justify-center items-center mt-24"
    >
      <span className="sm:text-5xl font-Josefin font-bold text-4xl mx-8 text-center sm:mx-0">
        Get Paid Listening To Music
      </span>
      <div className="h-1 w-20 bg-[#2f5bea] overflow-hidden rounded-md mt-8">
        <span className="h-1 w-[5px] bg-white absolute animate-slide"></span>
      </div>
      <div className="text-[#646464] text-[16px] mt-6 font-Nunito font-semibold">
        Enjoy the rhythms in life, choose a steppr to join you.
      </div>
    </div>
  );
};

export default Hero;
