import './App.css';
import Header from './components/UI/Header/Header';
import Navbar from './components/UI/Navbar/Navbar';
import './images/logo.png';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Messages from './Pages/Messages/Messages';
import ContentSide from './components/UI/ContentSide/ContentSide';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import MusicPage from './Pages/MusicPage/MusicPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <ContentSide>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages/*" element={<Messages />} />
          <Route path="/newsfeed" element={<NewsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </ContentSide>
    </div>
  );
}

export default App;
