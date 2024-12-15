import { ApiResponse } from "./MyInterface";
import mockImage from "../assets/mock.jpg";



export const MOCK_DATA_CATEGORIES : ApiResponse = {
	categories : [
		{
			id : 1,
			name : "Бытовая техника",
			description : "Оборудование и приборы для дома, облегчающие повседневные задачи.",
			image_url : mockImage,
			status : true
		},

		{
			id : 2,
			name : "Товары для дома",
			description : "Широкий ассортимент товаров для дома, включая мебель, текстиль и декор.",
			image_url : mockImage,
			status : true 
		},

		{
			id : 3,
			name : "Зоотовары",
			description : "Всё необходимое для ухода за домашними животными: корм, аксессуары и игрушки.",
			image_url : mockImage,
			status : true
		}
	
		
	
	]
}