import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from './components/Navbars/Navbars';
import Donasi from "./pages/Donasi/Donasi";
import Forum from "./pages/Forum/Forum";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Status from "./pages/Status/Status";
import Statistic from "./pages/Statistik/Statistik";
import Register from "./pages/Login/Register";


function App() {
  return (
    <Router>
      <Navbars/>
      <main>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Forum" exact component={Forum} />
          <Route path="/Donasi" exact component={Donasi} />
          <Route path="/Status" exact component={Status} />
          <Route path="/statistic" exact component={Statistic} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;