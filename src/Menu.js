import React from "react";

const Menu = (props) => {
  const { menuItem } = props;
  const menuDisplay = menuItem.map((item) => {
    const { id, img, title, price, desc } = item;
    return (
      <article className="menu-item" key={id}>
        <img className="photo" src={img} alt={title} />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
  return <div className="section-center">{menuDisplay};</div>;
};

export default Menu;
