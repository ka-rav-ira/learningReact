import React from "react";

function Card(props) {
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
        <img
          src="https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.userName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
    </>
  );
}

export default Card;
