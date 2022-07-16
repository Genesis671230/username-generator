import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="w-screen flex items-center justify-center mt-14 mb-44">
      <div className="grid sm:grid-cols-2 mx-auto w-[85vw] grid-cols-1">
        <div>
          <h1 className="sm:text-5xl text-4xl font-Josefin font-bold p-8 text-left">
            About Us
            <div className="h-1 w-20 bg-[#2f5bea] overflow-hidden rounded-md mt-8">
              <span className="h-1 w-[5px] bg-white absolute animate-slide"></span>
            </div>
          </h1>
          <p className="text-[16px] text-[#646464] text-left">
            The MusicSteppr app offers you a variety of ways of earning to
            choose from. It’s time to take our next Step Together towards
            bridging the gap between Fun & Financial Freedom. Ways to Earn
          </p>
          <ol className="text-[#646464]">
            <li>
              1. Refer a Single to someone and gain the artist you are
              supporting a sale through you. (Commission earnings)
            </li>
            <li>
              2. Refer an Album to someone and gain the artist you are
              supporting a sale through you. (Commission earnings)
            </li>
            <li>
              3. Become a Monthly Top 10 Listener of an artist with a Trophy
              badge (minimum £6 to uncapped earnings)
            </li>
            <li>
              4. Being Selected as a favourite artist by a streamer (£0.50)
            </li>
            <li>5. Sign up a new user. (Residual earnings)</li>
          </ol>
          <p className="text-[16px] text-[#646464] text-left">
            Make your life a little easier by earning doing what you enjoy the
            most.
          </p>
          <div className="flex items-center">
            <a href="https://apps.apple.com/gb/app/musicsteppr/id1560988718">
              <div className="mt-4">
                <img src="app store.png" width={275} height={275} />
              </div>
            </a>
            <Link
              to="/about"
              className="cursor-pointer mx-4  p-4 bg-black rounded-md mt-4 text-center w-1/2 h-1/2 flex items-center justify-center hover:bg-gray-900"
            >
              <div className="text-md text-white font-medium font-Nunito">
                Referall Program
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-28">
          <img src="img1.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
