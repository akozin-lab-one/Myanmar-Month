import React from "react";

const About = () => {
  return (
    <div className="w-[85%] lg:h-[530px] mx-auto ">
      <h1 className="uppercase text-nowrap text-center my-4 font-extrabold text-3xl">
        About Me
      </h1>
      <div className=" grid place-items-center">
        <p className="text-wrap w-[500px]">
          Hello I am full-stack webdeveloper and mechatronics enginner. I can
          create Iot projects and web application. And I can fix another IT
          Problems and related Technical Issues.
        </p>
      </div>
      <div className="flex mt-8 gap-x-8">
        <div className="w-80 h-80 bg-black rounded-md">
          <div className="text-center w-80 flex justify-center">
            <img
              className="rounded-full w-16 h-16 mt-3 text-center"
              src="https://shorturl.at/GRX57"
              alt=""
            />
          </div>
          <div className="flex w-80 mt-9">
            <div className="flex justify-end  ms-9 w-25">
              <div className="text-white">
                <p className="mb-2">Name </p>
                <p className="mb-2">Phone </p>
                <p className="mb-2">Mail </p>
                <p className="mb-2">Address </p>
              </div>
            </div>
            <div className="text-white me-2 ms-1">
              <p className="mb-2">:</p>
              <p className="mb-2">:</p>
              <p className="mb-2">:</p>
              <p className="mb-2">:</p>
            </div>
            <div className="flex justify-start w-44">
              <div className="text-white">
                <p className="mb-2"> Aung Ko Zin</p>
                <p className="mb-2"> 09 256-049-580</p>
                <p className="mb-2"> kozinaung479@gmail.com</p>
                <p className="mb-2"> Mandalay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="text-center mb-5">
            <h1 className="font-extrabold text-3xl">My Skills</h1>
          </div>
          <div className="grid grid-cols-4 gap-2 ">
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              Html
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              Css
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              JavaScript
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              React Js
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              PHP
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              Laravel(Framework) 
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              Python(IOT)
            </div>
            <div className="flex place-items-center justify-center bg-black text-white rounded h-12 font-bold">
              Django(FrameWork)
            </div>
          </div>
          <div className="mt-6">

            <p>
            I participated as a team member in creating a small IoT project for a water pump station. AC voltage was used as the power supply for these three projects, and the programming language employed for the IoT project is Python. 
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
