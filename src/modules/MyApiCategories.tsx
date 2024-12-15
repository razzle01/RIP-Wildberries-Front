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
	  

	  
	  export const fetchCategories = async (categoryName: string): Promise<MyCategories[]> => {
		try {
		  let response: Response;
	  
		  if (!categoryName.trim()) {
			response = await fetch(`/api/categories/`, {
			  headers: {
				Accept: "application/json",
			  },
			});
		  } else {
			response = await fetch(`/api/categories/?name=${encodeURIComponent(categoryName)}`, {
			  headers: {
				Accept: "application/json",
			  },
			});
		  }
	  
		  if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		  }
	  
		  const data: ApiResponse = await response.json();
	  
		  if (data && data.categories) {
			return data.categories; // Возвращаем данные напрямую
		  } else {
			throw new Error("Некорректный формат данных");
		  }
		} catch (error) {
		  console.error("Ошибка при запросе данных:", error);
	  
		  const filteredMockCategories = categoryName
			? MOCK_DATA_CATEGORIES.categories.filter((category) =>
				category.name.toLowerCase().includes(categoryName.toLowerCase())
			  )
			: MOCK_DATA_CATEGORIES.categories;
	  
		  return filteredMockCategories; // Возвращаем мок-данные в случае ошибки
		}
	  };
	  