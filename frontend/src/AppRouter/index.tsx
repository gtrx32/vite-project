import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ReviewsPage from "../pages/ReviewsPage";
import CatalogPage from "../pages/CatalogPage";
import ChatPage from "../pages/ChatPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/chat" element={<ChatPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default AppRouter;