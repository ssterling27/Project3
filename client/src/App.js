import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Auth/Login.js'
import Register from './pages/Auth/Register.js'
import Calendar from './pages/Calendar/Calendar.js'
import Home from './pages/Home/Home.js'
import AddFriend from './pages/AddFriend/AddFriend.js'
import Meetup from './pages/Meetup/Meetup.js'
import Activities from './pages/Activities/Activities.js'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signIn'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/calendar'>
            <Calendar />
          </Route>
          <Route path='/addfriend'>
            <AddFriend />
          </Route>
          <Route path='/meetup'>
            <Meetup />
          </Route>
          <Route path='/activites'>
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
