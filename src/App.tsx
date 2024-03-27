import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="clonify">
        <Sidebar />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
