import logo from './logo.svg';
import './App.css';
import AppLayout from './Layout/AppLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddEditBook from './Components/Book/AddModifyBook';


function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route default exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/AddBook">
              <AddEditBook />
            </Route>
            <Route path="/book/:bookName">
              <AddEditBook />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
