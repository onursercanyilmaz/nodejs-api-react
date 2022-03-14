import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import Login from "./components/Login"
import Signup from './components/Signup';
import Mainscreen from "./components/Mainscreen"

function App() {
  return (
    <div>
      <Container>

        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/signup"  component={Signup}/>
          <Route exact path="/main"  component={Mainscreen}/>

        </Switch>
      </Container>
    </div>
  );
}

export default App;
