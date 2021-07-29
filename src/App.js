import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import CollectionPage from "./pages/collections/collections";
import SigninPage from "./pages/signin/signin";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/collections" component={CollectionPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
