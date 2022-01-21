import { TodoInput } from "./GroceryList";
import { useState } from "react";
import { TodoItem } from "./GroceryItem";
import { id2 } from "id2";

export const Todo = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log("Data", data);
    const payload = {
      title: data,
      status: false,
      id: id2(7)
    };

    setList([...list, payload]);
  };

  const handleRemoveItem = (id) => {
    var new_arr = list.filter((item) => {
      return item.id !== id;
    });
    setList(new_arr);
  };
  return (
    <>
      <TodoInput getData={handleClick} />
      {list.map((e) => (
        <TodoItem
          key={e.id}
          {...e}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </>
  );
};