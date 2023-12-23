import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ReviewsPage from '../pages/ReviewsPage';
import CatalogPage from '../pages/CatalogPage';
import ChatPage from '../pages/ChatPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import GamePage from '../pages/GamePage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminPage from '../pages/AdminPage';

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/reviews' element={<ReviewsPage />} />
    <Route path='/catalog' element={<CatalogPage />} />
    <Route path='/chat' element={<ChatPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/game/:id' element={<GamePage />} />
    <Route path='*' element={<MainPage />} />
    <Route path='/404' element={<NotFoundPage />} />
    <Route path='/admin-page' element={<AdminPage />} />
  </Routes>
);

export default AppRouter;
