import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/statistic" exact component={Statistic} />
      </Switch>
    </Router>
  );
}

export default App;
