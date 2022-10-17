import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [item, setItem] = useState(items);
  const elements = item.map((item) => {
    const { id, img, desc, title, price } = item;
    return (
      <section key={id}>
        <img className="photo" src={img} alt={desc} />
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="item-info">{desc}</p>
      </section>
    );
  });

  return (
    <>
      {elements}
      <Menu />
      <Categories />
    </>
  );
}

export default App;
