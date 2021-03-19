import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
