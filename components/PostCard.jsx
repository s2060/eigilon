import React from "react";

const PostCard = () => {
  return (
    <div className="mb-4 w-full md:w-[650px] rounded bg-white p-2 shadow-lg">
      <label
        className="block text-gray-700 text-normal font-base mb-2"
        htmlFor="textarea"
      >
        <span className="text-red-600 mr-2 font-base text-normal">*</span>I went
        to school today
      </label>
      <textarea
        className="w-full text-xs font-light p-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
        id="textarea"
        rows="2"
        placeholder="meaning of the above text"
      ></textarea>
    </div>
  );
};

export default PostCard;
