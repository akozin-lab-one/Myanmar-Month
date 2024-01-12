import React from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="w-[85%] lg:h-[530px] mx-auto ">
      <h1 className="uppercase text-nowrap text-center my-4 font-extrabold text-3xl">
        Services
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-3 lg:gap-x-3 gap-x-2 w-[99%] mx-auto  lg:w-[77%] lg:mx-auto mb-5">
        <div className="bg-black rounded p-2">
          <div class="text-center">
            <i className="fa-solid fa-code text-white text-dark fs-1 fw-bold"></i>
            <p className="block text-white text-xs lg:text-base ">Error Solution</p>
          </div>
          <div class="text-white text-center text-muted mt-1 hidden sm:block lg:block mb-2">
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              officiis alias fugit illo assumenda? Fuga rem neque, magni
              asperiores eos harum tempora tempore incidunt et sint ab totam
              modi dignissimos?
            </p>
          </div>
        </div>
        <div className="bg-black rounded p-2">
          <div class="text-center">
            <i className="fa-solid fa-laptop-code text-white text-dark fs-1 fw-bold"></i>
            <p className="block text-white text-xs lg:text-base">Web Design & Development</p>
          </div>
          <div class="text-white text-center text-muted mt-1 hidden   sm:block lg:block mb-2">
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              officiis alias fugit illo assumenda? Fuga rem neque, magni
              asperiores eos harum tempora tempore incidunt et sint ab totam
              modi dignissimos?
            </p>
          </div>
        </div>
        <div className="bg-black rounded p-2">
          <div class="text-center">
            <i className="fa-solid fa-mobile-screen text-white text-dark fs-1 fw-bold"></i>
            <p className="d-block  text-white text-xs lg:text-base">Mobile Apps </p>
          </div>
          <div class="text-white text-center text-muted mt-1 hidden sm:block lg:block mb-2">
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              officiis alias fugit illo assumenda? Fuga rem neque, magni
              asperiores eos harum tempora tempore incidunt et sint ab totam
              modi dignissimos?
            </p>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 mx-auto mt-10 mb-3" id="service">
            <div class=" py-1">
                <h2 class="text-center font-bold text-5xl">50+</h2>
                <p class="uppercase font-bold text-center">Projects</p>
            </div>
            <div class=" py-1">
                <h2 class="text-center font-bold text-5xl">50+</h2>
                <p class="uppercase font-bold text-center">Clients</p>
            </div>
            <div class=" py-1">
                <h2 class="text-center font-bold text-5xl">40+</h2>
                <p class="uppercase font-bold text-center">Completed</p>
            </div>
            <div class=" py-1">
                <h2 class="text-center font-bold text-5xl">20+</h2>
                <p class="uppercase font-bold text-center">upcoming</p>
            </div>
        </div>

        <div class="text-center hidden  sm:block lg:block">
            <h3 class="font-bold h1 drop-shadow-md">Do You Have Any Projects?</h3>
            <NavLink to="/contact">
            <h4 class="bg-black w-28 text-white mx-auto cursor-pointer py-1 my-2 rounded px-2">Contact Me!</h4>
            </NavLink>
        </div>
    </div>
  );
};

export default Service;
