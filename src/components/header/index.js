import { h } from "preact";
import { useState } from 'preact/hooks'
import { Link } from "preact-router/match";
import style from "./style.css";
import logo from "../../assets/logo.png";

import getFoodMenu from "../food-menu";

const Header = () => {
  const [foodMenu, setFoodMenu] = useState(getFoodMenu);
  return (
    <header class={style.header}>
      <div className="container">
        <div className="header-logo-wrapper">
          <Link activeClassName="is-active" href="/">
            <img className="header-logo" src={logo} />
          </Link>
        </div>
        <nav className="nav">
          <Link className="nav-item" activeClassName="is-active" href="/">
            Ana Sayfa
          </Link>
          {
            foodMenu.main.map((mItem) => (
              <Link className="nav-item" activeClassName="is-active" href={`/menu/${mItem.slug}`}>
                {mItem.title}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;
