import { useReducer, useRef, useCallback } from "react";
import { generateId } from "../helpers";

export type ItemType = { id: string; text: string; checked: boolean };

type todoReducerStateType = {
  items: ItemType[];
};
type todoReudcerActionTypes = { type: string; value?: string | ItemType };

const saveTodos = (items: ItemType[]) =>
  localStorage.setItem("todoItems", JSON.stringify(items));

const loadTodos = () =>
  JSON.parse(localStorage.getItem("todoItems") ?? "[]") as ItemType[];

const clearTodos = () => localStorage.clear();

const todoReducer = (
  state: todoReducerStateType,
  action: todoReudcerActionTypes
) => {
  switch (action.type) {
    case "add": {
      const items = [
        ...state.items,
        { text: action.value! as string, checked: false, id: generateId() },
      ];
      saveTodos(items);
      return {
        ...state,
        items,
      } as todoReducerStateType;
    }
    case "save": {
      saveTodos(state.items);
      return state;
    }
    case "reset": {
      clearTodos();
      return { ...state, items: [] };
    }
    case "toggleCheck": {
      const itemId = action.value! as string;

      const items = state.items.map((item) => {
        if (item.id === itemId) {
          item.checked = !item.checked;
          return item;
        } else return item;
      });
      saveTodos(items);
      return { ...state, items };
    }

    case "deleteItem": {
      const itemId = action.value! as string;
      const items = state.items.filter((item) => item.id !== itemId);
      saveTodos(items);
      return { ...state, items };
    }
    default: {
      return state;
    }
  }
};

export default function useTodo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(todoReducer, null, (_) => ({
    items: loadTodos(),
  }));

  const toggleCheck = (item: ItemType) => {
    dispatch({ type: "toggleCheck", value: item.id });
  };

  const deleteItem = (item: ItemType) => {
    dispatch({ type: "deleteItem", value: item.id });
  };
  return {
    items: state.items,
    toggleCheck,
    deleteItem,
    bindInput: {
      ref: inputRef,
      onKeyPress: useCallback(
        (event: any) => {
          if (event.key === "Enter") {
            dispatch({ type: "add", value: inputRef?.current?.value });
            inputRef!.current!.value = "";
            inputRef?.current?.focus();
          }
        },
        [dispatch]
      ),
    },
  };
}
