import logo from "./logo.svg";
import "./App.css";
import Launch from "./views/Launch";
import Launches from "./views/Launches";
import NotFound from "./views/NotFound";

// See index.js for how <BrowserRouter> is used.
import { Link, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <header>
        <nav className="text-center">
          <Link to="/launches">Launches</Link>
        </nav>
      </header>

      <Switch>
        {/* If not using exact, put the more specific routes first. */}

        <Redirect exact from="/" to="/launches" />

        {/* 
        :id is a URL param, it is a placeholder var name for some value
        that will be at that location of the URL when the URL is visited.

        The url param names here relate to the params used in the component.

        Without exact on both this route and /launches, this needs to be first.
        */}
        <Route exact path="/launches/:id">
          <Launch />
        </Route>

        {/* When the URL matches a path, the specified component is rendered. */}
        <Route exact path="/launches">
          <Launches />
        </Route>

        {/* 
          If none of the above routes match, use NotFound view.
          If there is a route with path="/" above this, it will catch unknown
          routes instead unless it has exact={true}
          */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
