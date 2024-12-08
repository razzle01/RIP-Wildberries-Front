import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Для навигации
import { fetchCategories } from "../modules/MyApiCategories"; // Для получения категорий
import { MyCategories } from "../modules/MyInterface"; // Интерфейс категорий
import { OneCategoryItem } from "../components/OneCategoryItem"; // Карточка категории
import { BreadCrumbs } from "../components/BreadCrumbs";
import Header from "../components/Header";
import "./MainPageCategories.css";

const MainPageCategories: React.FC = () => {
  const [categories, setCategories] = useState<MyCategories[]>([]); // Список категорий
  const [searchQuery, setSearchQuery] = useState(""); // Строка поиска
  const navigate = useNavigate(); // Навигация для перехода

  // Загружаем категории при первом рендере
  useEffect(() => {
    const loadCategories = async () => {
      await fetchCategories("", setCategories); // Загружаем все категории
    };

    loadCategories();
  }, []);

  // Поиск категорий
  const handleSearch = async () => {
    await fetchCategories(searchQuery, setCategories); // Вызов функции поиска
  };

  // Переход на страницу категории по ID
  const handleCategoryClick = (id: number) => {
    navigate(`/categories/${id}`); // Переход по id
  };

  return (
    <>
      <Header />
      <div>
        {/* Хлебные крошки */}
        <BreadCrumbs
          crumbs={[
            { label: "Категории" }, // Текущая страница
          ]}
        />

        {/* Поле ввода для поиска */}
        <div className="search-container">
          <input
            type="text"
            className="main-search"
            placeholder="Введите имя категории"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Обновляем строку поиска
          />
          <button className="search-btn" onClick={handleSearch}>
            Найти
          </button>
        </div>

        {/* Список категорий */}
        <div className="categories-grid">
          {categories.map((category, pk) => (
            <OneCategoryItem
              key={pk}
              category={category}
              imageClickHandler={() => handleCategoryClick(pk + 1)} // Передаем id в обработчик
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPageCategories;
