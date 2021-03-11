import './bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Teams from './components/Teams';
import TeamDetails from './components/TeamDetails';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Teams />
        </Route>
        <Route path="/Team/:idTeam/">
          <TeamDetails />
        </Route>

        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
        
      </Switch>

      <Footer />
    </Router>
    
  );
}

export default App;
