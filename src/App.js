import './App.css';

import Header from './components/UI/Header/Header';
import Navbar from './components/UI/Navbar/Navbar';
import './images/logo.png';
import Content from "./components/ProfilePage/ProfilePage";

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
        <Content/>
    </div>
  );
}

export default App;
