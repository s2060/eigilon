"use client";
import React from "react";
import PostCard from "@components/PostCard";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const CreatePost = () => {
  const [text] = useTypewriter({
    words: ["Ei ngasi school chatli. "],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/* Instruction Card */}
      <div className="text-left w-full md:w-[650px] mb-5">
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5">
            <li className="text-sm mb-2">
              Please DO NOT provide any personal information.
            </li>
            <li className="text-sm mb-2">
              Write upon on your own understanding.
            </li>
            <li className="text-sm mb-2">
              If any words doesnt have their corresponding meaning in the other
              language, please keep it as it is.
            </li>
          </ol>
        </div>
      </div>
      {/* Example card */}
      <div className="mb-4 w-full md:w-[650px] rounded bg-white p-3 shadow-lg">
        <label
          className="block text-gray-700 text-normal font-base mb-3"
          htmlFor="textarea"
        >
          <span className="text-green-600 mr-2 font-base text-normal">eg:</span>
          I went to school today
        </label>
        <div>
          <span className="font-light text-medium text-gray-400 ml-7">
            {text}
          </span>
          <Cursor cursorStyle="|" />
        </div>
        <hr />
      </div>

      {/* Ques and Answer --- to be maped based on API */}
      <PostCard />
      <PostCard />

      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
