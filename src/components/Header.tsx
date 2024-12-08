import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../modules/MyRoutes";
import "./Header.css";

export const Header: FC = () => {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <Link to={ROUTES.HOME}>
          <h1 className="headText">Wildberries</h1>
        </Link>
      </div>
      <div className="button-container">
        <Link to={ROUTES.CATEGORIES} className="btn custom-purple-btn">
          Категории товаров
        </Link>
      </div>
    </nav>
  );
};

export default Header;

