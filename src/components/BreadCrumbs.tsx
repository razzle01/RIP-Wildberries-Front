import "./BreadCrumbs.css";
import React from "react";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ROUTES } from "../modules/MyRoutes";

interface ICrumb {
  label: string;
  path?: string; // Путь для ссылки
}

interface BreadCrumbsProps {
  crumbs: ICrumb[]; // Массив хлебных крошек
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ crumbs }) => {
  return (
    <ul className="breadcrumbs">
      {/* Первая крошка — Главная */}
      <li>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>

      {/* Остальные крошки */}
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 ? (
              <li>{crumb.label}</li> // Последний элемент — не ссылка
            ) : (
              <li>
                <Link to={crumb.path || ""}>{crumb.label}</Link> {/* Промежуточные — ссылки */}
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};
