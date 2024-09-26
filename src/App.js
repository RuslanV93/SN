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

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.messagesPage} />
      <ContentSide>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'} />} />
          <Route
            path="/profile"
            element={<ProfilePage state={props.state} dispatch={props.dispatch} />}
          />
          <Route
            path="/messages/*"
            element={<Messages dispatch={props.dispatch} state={props.state} />}
          />
          <Route path="/newsfeed" element={<NewsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
            path={'*'}
            element={<NotFoundPage link={'/'} errorMessage={'Go back to start page'} />}
          />
          <Route
            path="/friends"
            element={<FriendsPage state={props.state.messagesPage} />}
          />
        </Routes>
      </ContentSide>
    </div>
  );
}

export default App;
