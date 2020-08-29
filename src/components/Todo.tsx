/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import useUnsplash from "../hooks/useUnsplash";
import useTodo, { ItemType } from "../hooks/useTodo";
import Clock from "./Clock";

export default function Todo(props: any) {
  const [imgUrl] = useUnsplash();

  const { items, bindInput, toggleCheck } = useTodo();
  return (
    <div
      className="flex text-white font-bold flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgUrl})`,
      }}
    >
      <Clock />
      <h1 className="text-5xl mt-2 text-center font-semibold tracking-wide uppercase">
        Let's get shit done
      </h1>
      <input
        className="mt-2 border border-gray-300 bg-transparent shadow rounded-md p-4 max-w-sm w-full mx-auto text-xl focus:outline-none focus:border-gray-500"
        {...bindInput}
      />
      <div
        className={"box-content mt-2 max-w-full mx-auto p-8 overflow-y-auto"}
        style={{ maxHeight: "50vh" }}
      >
        {items.map((item: ItemType) => {
          return (
            <div
              key={item.id}
              className={
                "flex z-10 max-w-sm items-center text-2xl border border-gray-300 cursor-pointer shadox-xl p-4 mx-auto mt-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              }
              onClick={(e) => toggleCheck(item)}
            >
              <div className={"pr-2"}>
                <svg
                  className="h-6 w-6 border border-gray-300 rounded-md"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {item.checked && (
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </div>
              <div
                className={item.checked ? "line-through" : ""}
                style={{ wordBreak: "break-word" }}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
