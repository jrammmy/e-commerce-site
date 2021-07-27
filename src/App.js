import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import CollectionPage from "./pages/collections/collections";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collections" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
