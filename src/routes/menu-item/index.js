import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import getFoodMenu from "../../components/food-menu";

const MenuItem = (props) => {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const foodMenu = JSON.parse(JSON.stringify(getFoodMenu));
    const menu = foodMenu.main.find((o) => o.slug === props.name);
    setMenu(menu);
  }, [props.name]);
  return (
    <div className="menu-item">
      <div className="container">
        {menu.products && menu.products.map((product) => (
          <div className="card is-food">
            <div className="card-food">
              <div className="card-food_content">
                <p>{product.title}</p>
                {product.description && <p className="desc">{product.description}</p>}
              </div>
              <div className="card-food_price">
                <p>₺ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
