export interface MyCategories {
	id: number; 
	name : string
	description : string
	image_url ?: string
	status : boolean
}
	
export interface ApiResponse {
	categories: MyCategories[];
}
		