import './App.css';
import Header from './components/UI/Header/Header';
import Navbar from './components/UI/Navbar/Navbar';
import './images/logo.png';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Messages from './Pages/Messages/Messages';
import ContentSide from './components/UI/ContentSide/ContentSide';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import MusicPage from './Pages/MusicPage/MusicPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import FriendsPage from './Pages/FriendsPage/FriendsPage';
import { ThemeContext } from './context/ThemeProvider';
import { useContext } from 'react';
import AllUsersPageContainer from './Pages/AllUsers/AllUsersPageContainer';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${theme}`}>
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
          <Route
            path={'*'}
            element={<NotFoundPage link={'/'} errorMessage={'Go back to start page'} />}
          />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/users" element={<AllUsersPageContainer />} />
        </Routes>
      </ContentSide>
    </div>
  );
}

export default App;
