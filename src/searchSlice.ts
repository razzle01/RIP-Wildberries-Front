import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyCategories } from "./modules/MyInterface"; // Импорт интерфейса MyCategories

interface CategoryState {
  categories: MyCategories[]; // Используем MyCategories
  searchQuery: string;
}

const initialState: CategoryState = {
  categories: [],
  searchQuery: "",
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<MyCategories[]>) {
      state.categories = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategories, setSearchQuery } = categorySlice.actions;
export default categorySlice.reducer;
