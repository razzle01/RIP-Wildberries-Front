export const ROUTES = {
	HOME: "/",
	CATEGORIES: "/categories",
}

export type RouteKeyType = keyof typeof ROUTES;	
export const ROUTE_LABELS: {[key in RouteKeyType]:string} = {
	HOME:"Главная",
	CATEGORIES:"Категории"

};	