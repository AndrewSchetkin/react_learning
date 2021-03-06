import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar navbarLinks={props.state.navbarLinks} />
      <div className="app-content">
        <Route path="/profile">
          <Profile state={props.state.profile} addPost={props.addPost} changePostMsg={props.changePostMsg}/>
        </Route>
        <Route path="/dialogs">
          <Dialogs state={props.state.dialogs} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </div>
  )
}

export default App;
