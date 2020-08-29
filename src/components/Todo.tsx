/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Clock from "./Clock";
import TodoItem from "./TodoItem";
import useUnsplash from "../hooks/useUnsplash";
import useTodo, { ItemType } from "../hooks/useTodo";

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
          {items.map((item: ItemType) => (
            <TodoItem
              key={item.id}
              item={item}
              hooks={{ toggleCheck, deleteItem }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
