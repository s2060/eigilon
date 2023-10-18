import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex">
      <div className="flex-1 flex justify-center items-center flex-col">
        <h1 className="head_text text-center">
          Share your understanding, with Eigi Lon
        </h1>
        <br className="max-md:hidden" />
        <p className="desc text-center mb-5">
          Your linguistic skills are highly regarded, and we offer small rewards
          as a token of our appreciation for your contributions.
        </p>
        <button className="btn_main">Start Now</button>
        <p className="desc mb-5 text-center w-full">Don't have an account ?</p>
        <button className="text-base p-2 cursor-pointer rounded-sm outline outline-offset-2 outline-2">
          Sign Up for free
        </button>
      </div>
      <div className="flex-1">Image Here</div>
    </div>
  );
};

export default Home;
