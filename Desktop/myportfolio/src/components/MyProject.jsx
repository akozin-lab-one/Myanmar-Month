import React from "react";

const MyProject = () => {
  return (
    <div className="w-[85%] lg:h-[570px] md:h-[410px] mx-auto grid  lg:place-items-center md:place-items-center">
      <div>
      <h1 className="uppercase text-nowrap text-center my-4 font-extrabold text-3xl">
        My projects
      </h1>

      <div className="grid lg:grid-cols-3 lg:gap-x-2 md:grid-cols-3">
        <div className="w-[100%] h-[82%]">
          <img className="w-[100%] h-[82%]" src="https://cdn.dribbble.com/users/86061/screenshots/1262636/todo400.jpg" alt="myProjectPhoto" />
          <div className="w-[80%] mx-auto flex justify-between">
            <a href="" className="drop-shadow-sm font-bold">Demo</a>
            <p><i class="fa-brands fa-github text-black cursor-pointer text-3xl"></i></p>
          </div>
        </div>
        <div className="w-auto">
          <img className="w-auto" src="https://i.ytimg.com/vi/ov7xufE9hlU/maxresdefault.jpg" alt="myProjectPhoto" />
          <div className="w-[80%] mx-auto flex justify-between">
            <a href="" className="drop-shadow-sm font-bold">Demo</a>
            <p><i class="fa-brands fa-github text-black cursor-pointer text-3xl"></i></p>
          </div>
        </div>
        <div className="w-[100%] h-[82%]">
          <img className="w-[100%] h-[82%]" src="https://cdn.dribbble.com/users/2698271/screenshots/11351381/student_s_dashboard.png" alt="myProjectPhoto" />
          <div className="w-[80%] mx-auto flex justify-between">
            <a href="" className="drop-shadow-sm font-bold">Demo</a>
            <p><i class="fa-brands fa-github text-black cursor-pointer text-3xl"></i></p>
          </div>
        </div>
      </div>

        <div class="text-center hidden  sm:block lg:block">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur deserunt, aut illo ipsum, repellendus corporis excepturi itaque officiis facere, velit molestiae eaque dolorem est cum eveniet tenetur eius! Dicta quod minima sit vel.</p>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
