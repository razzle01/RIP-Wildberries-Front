import { MOCK_DATA_CATEGORIES } from "./MockDataCategories";
import { MyCategories, ApiResponse } from "./MyInterface";
	export const getCategoryByID = async (pk: number): Promise<MyCategories> => {
		try {
		  console.log(`Запрашиваем категорию с ID: ${pk}`);
		  const response = await fetch(`/api/categories/${pk}/`);
	  
		  if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		  }
	  	
		  return await response.json(); // Преобразуем ответ в JSON только при успешном статусе
		} catch (error) {
		  console.error(`Ошибка при запросе данных для ID ${pk}:`, error);
		  return MOCK_DATA_CATEGORIES.categories[pk - 1];
		}
	  };
	  

	  
	  export const fetchCategories = async (
		categoryName: string,
		setCategories: (categories: MyCategories[]) => void
	  ): Promise<void> => {
		try {
		  let response: Response;
	  
		  if (!categoryName.trim()) {
			// Если строка поиска пуста, запрашиваем все категории
			response = await fetch(`/api/categories/`, {
			  headers: {
				Accept: "application/json", // Указываем, что ожидаем JSON
			  },
			});
		  } else {
			// Иначе фильтруем по имени
			response = await fetch(`/api/categories/?name=${encodeURIComponent(categoryName)}`, {
			  headers: {
				Accept: "application/json", // Указываем, что ожидаем JSON
			  },
			});
		  }
	  
		  if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		  }
	  
		  const data: ApiResponse = await response.json(); // Преобразуем ответ в JSON
	  
		  // Проверяем, действительно ли ответ содержит категории
		  if (data && data.categories) {
			setCategories(data.categories); // Устанавливаем данные из бэка
		  } else {
			throw new Error("Некорректный формат данных");
		  }
	  
		} catch (error) {
		  console.error("Ошибка при запросе данных:", error);
	  
		  // Если ошибка, используем мок-данные
		  const filteredMockCategories = categoryName
			? MOCK_DATA_CATEGORIES.categories.filter((category) =>
				category.name.toLowerCase().includes(categoryName.toLowerCase())
			  )
			: MOCK_DATA_CATEGORIES.categories; // Если пусто, возвращаем все категории из моков
	  
		  setCategories(filteredMockCategories);
		}
	  };
	  
		