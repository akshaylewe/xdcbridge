import "./App.css";
import Card from "./Modules/Card/Card";
import About from "./Modules/About/";
import Bridge from "./Modules/Bridge";
import Swap from "./Modules/Swap";
import Pool from "./Modules/Pool"
import Market from "./Modules/Market"
import History from "./Modules/History"
import PoolDetail from "./Modules/PoolDetail"
import AddLiquidity from "./Modules/AddLiquidity";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Tile__homepage /> */}
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/swap" element={<Swap />}/>
          <Route path="/pool" element={<Pool />} />
          <Route path="/market" element={<Market />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/pool-detail" element={<PoolDetail />} />
          <Route path="/add-liquidity" element={<AddLiquidity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
