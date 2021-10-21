import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./component/Login";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
        <h1>HELLO WORLD</h1>

        <div className="routes">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
            </Switch>
          </div>

    </div>

  );
}

export default App;
