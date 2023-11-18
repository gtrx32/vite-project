import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ReviewsPage from "../pages/ReviewsPage";
import CatalogPage from "../pages/CatalogPage";
import ChatPage from "../pages/ChatPage";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/chat" element={<ChatPage />} />
  </Routes>
);

export default AppRouter;