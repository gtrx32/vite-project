import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ReviewsPage from '../pages/ReviewsPage';
import CatalogPage from '../pages/CatalogPage';
import ChatPage from '../pages/ChatPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import GamePage from '../pages/GamePage';
import MainContainer from '../components/MainContainer';
import NotFoundPage from '../pages/NotFoundPage';

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
  </Routes>
);

export default AppRouter;
