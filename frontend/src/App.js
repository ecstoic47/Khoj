import Topbar from "./components/topbar/topbar";
import Homepage from "./pages/homepage/Homepage";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Khoj from "./pages/khoj/Khoj";


function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>

        <Route path="/khoj">
          {user ? <Khoj /> : <Homepage />}
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
