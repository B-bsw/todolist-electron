"use client";

import React, { useState } from "react";

type Todo = {
  id: number;
  name: string;
};

export default function HomePage() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodoList = (
    event: React.SubmitEvent<HTMLFormElement>,
    item: string,
  ) => {
    event.preventDefault();

    if (item.length < 1 || !item) return;
    setTodoItems((prev) => [...prev, { id: prev.length + 1, name: item }]);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col-reverse gap-5 items-center justify-center">
        <section className=" h-70 border w-100 overflow-scroll">
          {todoItems.map((i, index) => (
            <div key={i.id}>
              <span>{index}. </span>
              {i.name}
            </div>
          ))}
        </section>
        <section>
          <form
            onSubmit={(e) => addTodoList(e, inputText)}
            className="flex gap-5"
          >
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="outline"
            />
            <input type="submit" value={"ADD"} className="outline" />
          </form>
        </section>
      </div>
    </>
  );
}
