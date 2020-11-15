import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Route path="/profile"><Profile /></Route>
          <Route path="/dialogs"><Dialogs /></Route>
          <Route path="/news"><News /></Route>
          <Route path="/music"><Music /></Route>
          <Route path="/settings"><Settings /></Route>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
