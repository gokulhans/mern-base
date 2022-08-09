import { BrowserRouter,Routes,Route,} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Create from "./pages/Create";
import Delete from "./pages/Rud";


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/rud" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
