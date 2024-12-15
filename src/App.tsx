import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./modules/MyRoutes";
import MainPageCategories from "./pages/MainPageCategories";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";


function App() {
    return (
      <BrowserRouter basename="/RIP-Wildberries-Front"> 
        <Routes>
            <Route path={ROUTES.HOME} index element={<HomePage/>} />
            <Route path={ROUTES.CATEGORIES} index element={<MainPageCategories/>}/>
            <Route path={`${ROUTES.CATEGORIES}/:pk`} element={<CategoryDetailsPage />} />
        </Routes>
          
      
      </BrowserRouter>
    );
}

export default App;
