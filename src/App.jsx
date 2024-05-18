import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lesson/:id" component={Lesson} />
      </Switch>
    </Router>
  );
}

export default App;
