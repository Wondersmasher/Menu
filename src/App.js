import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const elements = items.map((item) => {
    return (
      <section key={item.id}>
        <img className="photo" src={item.img} alt={item.desc} />
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="item-info">{item.desc}</p>
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
