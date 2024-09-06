import './App.css';
import Content from './components/ProfilePage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './images/logo.png';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
