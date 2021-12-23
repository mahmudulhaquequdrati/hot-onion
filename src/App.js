import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import ThankYou from "./components/ThankYou/ThankYou";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/success">
              <ThankYou />
            </Route>
            <PrivateRoute path="/details/:id">
              <FoodDetails />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
