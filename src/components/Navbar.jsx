import React, { useState, useEffect } from 'react';
import { Link as Move } from 'react-router-dom';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 33
      ? setStickyClass('fixed top-0 left-0 z-50')
      : setStickyClass('relative');
  };
  return (
    <div className={`flex items-center ${stickyClass} bg-white w-screen`}>
      <Move to="/">
        <div className="ml-8 mt-4">
          <img src="ic_logo.png" width={100} height={100} />
          <span className="text-[35px] font-extrabold font-Josefin">
            MusicSteppr
          </span>
        </div>
      </Move>
    </div>
  );
};

export default Navbar;
