import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryByID } from "../modules/MyApiCategories"; // Функция для получения категории по ID
import { MyCategories } from "../modules/MyInterface"; // Интерфейс для категории
import { BreadCrumbs } from "../components/BreadCrumbs"; // Хлебные крошки
import Header from "../components/Header";
import "./CategoryDetailsPage.css"

const CategoryDetailsPage: React.FC = () => {
  const { pk } = useParams<{ pk: string }>(); // Получаем ID категории из URL
  const [category, setCategory] = useState<MyCategories | null>(null); // Состояние для категории
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Состояние для ошибок

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        if (pk) {
          const categoryData = await getCategoryByID(Number(pk)); // Запрашиваем категорию по ID
          setCategory(categoryData);
        }
      } catch (error) {
        console.error("Ошибка при загрузке категории:", error);
        setErrorMessage("Категория не найдена");
      }
    };

    fetchCategory();
  }, [pk]);

  if (errorMessage) {
    return <h2>{errorMessage}</h2>; // Показываем сообщение об ошибке
  }

  if (!category) {
    return <h2>Загрузка...</h2>; // Пока данные не загрузились
  }

  return (
    <>
      <Header />
      <div className="category-details">
        {/* Хлебные крошки */}
        <BreadCrumbs
          crumbs={[
            { label: "Категории", path: "/categories" }, // Путь к списку категорий
            { label: category.name }, // Текущая категория
          ]}
        />

        <div className="cat-content">
          <div className="cat-image">
            {category.image_url ? (
              <img src={category.image_url} alt={category.name} />
            ) : (
              <p>Изображение отсутствует</p>
            )}
          </div>

          <div className="cat-info">
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetailsPage;
