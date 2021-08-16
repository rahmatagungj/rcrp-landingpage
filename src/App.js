import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Donasi from "./pages/Donasi/Donasi";
import Forum from "./pages/Forum/Forum";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rules from "./pages/Rules/Rules";
import Statistic from "./pages/Statistik/Statistik";
import Register from "./pages/Login/Register";

function App() {
  return (
    <Router>
      <Navbars />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forum" exact component={Forum} />
          <Route path="/donasi" exact component={Donasi} />
          <Route path="/Rules" exact component={Rules} />
          <Route path="/statistik" exact component={Statistic} />
          <Route path="/masuk" exact component={Login} />
          <Route path="/daftar" exact component={Register} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
