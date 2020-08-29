/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import useUnsplash from "../hooks/useUnsplash";
import useTodo, { ItemType } from "../hooks/useTodo";
import Clock from "./Clock";

export default function Todo(props: any) {
  const [imgUrl] = useUnsplash();

  const { items, bindInput, toggleCheck, deleteItem } = useTodo();
  return (
    <div
      className="flex text-white font-bold flex-col items-center justify-around h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgUrl})`,
      }}
    >
      <div className={""}>
        <Clock />
      </div>
      <div className={"flex flex-col items-center justify-center"}>
        <h1 className="text-5xl mt-2 text-center font-semibold tracking-wide uppercase">
          Let's get shit done
        </h1>
        <input
          className="mt-4 border border-gray-300 bg-transparent shadow rounded-md p-4 max-w-sm w-full mx-auto text-xl focus:outline-none focus:border-gray-500"
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
                  "flex z-10 max-w-sm items-center justify-between text-2xl border border-gray-300 cursor-pointer shadox-xl p-4 mx-auto mt-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
                <div
                  className={
                    "ml-2 hover:rounded-full hover:bg-gray-300 hover:bg-opacity-25 hover:text-gray-900 "
                  }
                  onClick={(e) => deleteItem(item)}
                >
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
