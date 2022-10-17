import React from "react";

const Menu = (props) => {
  const { id, img, desc, title, price } = props;
  return (
    <section key={id}>
      <img className="photo" src={img} alt={desc} />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="item-info">{desc}</p>
    </section>
  );
};

export default Menu;
