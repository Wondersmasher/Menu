import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [item, setItem] = useState(items);
  const elements = item.map((data) => {
    // const { id, img, desc, title, price } = data;
    return <Menu {...data} />;
  });

  return (
    <>
      {elements}
      <Categories />
    </>
  );
}

export default App;
