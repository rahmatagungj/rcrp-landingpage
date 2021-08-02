import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbars';
import Donasi from "./pages/Donasi/Donasi";
import Forum from "./pages/Forum/Forum";
import Ucp from "./pages/Ucp/Ucp";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Status from "./pages/Status/Status";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";


function App() {
  return (
    <Router>
      <Switch>
        <Navbar/>
        <Route path="/" exact component={Home} />
        <Route path="/Forum" exact component={Forum} />
        <Route path="/Donasi" exact component={Donasi} />
        <Route path="/Ucp" exact component={Ucp} />
        <Route path="/Status" exact component={Status} />
        <Route path="/Login" exact component={Login} />
        <Route path="/statistic" exact component={Statistic} />
      </Switch>
    </Router>
  );
}

export default App;