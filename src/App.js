import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import CollectionPage from "./pages/collections/collections";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collections" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
