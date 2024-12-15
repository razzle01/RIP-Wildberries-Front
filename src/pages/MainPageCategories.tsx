import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategories, setSearchQuery } from "../searchSlice";
import { RootState } from "../store";
import { fetchCategories } from "../modules/MyApiCategories";
import { OneCategoryItem } from "../components/OneCategoryItem";
import { BreadCrumbs } from "../components/BreadCrumbs";
import Header from "../components/Header";
import "./MainPageCategories.css";

const MainPageCategories: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state: RootState) => state.categories.categories);
  const searchQuery = useSelector((state: RootState) => state.categories.searchQuery);

  // Загружаем категории при первом рендере
  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories("");
      dispatch(setCategories(data)); // Обновляем глобальное состояние
    };

    loadCategories();
  }, [dispatch]);

  // Обработчик поиска
  const handleSearch = async () => {
    const data = await fetchCategories(searchQuery);
    dispatch(setCategories(data)); // Обновляем глобальное состояние
  };

  return (
    <>
      <Header />
      <BreadCrumbs crumbs={[{ label: "Категории" }]} />
      <div className="search-container">
        <input
          type="text"
          className="main-search"
          placeholder="Введите имя категории"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <button className="search-btn" onClick={handleSearch}>
          Найти
        </button>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <OneCategoryItem
            key={category.id}
            category={category}
            imageClickHandler={() => navigate(`/categories/${category.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default MainPageCategories;

