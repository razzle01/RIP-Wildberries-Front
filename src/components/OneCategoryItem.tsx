import { FC } from "react";
import { MyCategories } from "../modules/MyInterface";


interface OneCategoryItemProps {
    category: MyCategories; // Интерфейс для одной категории
    imageClickHandler: () => void; // Обработчик клика
}

export const OneCategoryItem: FC<OneCategoryItemProps> = ({ category, imageClickHandler }) => {
    // Устанавливаем изображение (или заглушку, если нет)
    const image = category.image_url ? category.image_url : "no_image_available.jpg";

    return (    
        <div className="category-card">
            <div className="category-image" onClick={imageClickHandler}>
                <img src={image} alt={category.name} className="category-image-content" />
            </div>
            <h3 className="category-name">{category.name}</h3>
        </div>
    );
};
