import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register.js/Register';
import AuthProvider from './contexts/AuthProvider';
import { Toaster } from 'react-hot-toast';
import AddNewCar from './Pages/Dashboard/AddNewCar/AddNewCar';
import ExploreCars from './Pages/ExploreCars/ExploreCars';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/addNewCar'>
            <AddNewCar />
          </Route>
          <Route path='/explore-cars'>
            <ExploreCars />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
