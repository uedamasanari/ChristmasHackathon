import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import Santa from "./components/Santa";
import PresentCheck from "./components/PresentCheck";
import PresentPost from "./components/PresentPost";
import ChildAdd from "./components/ChildAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/santa" element={<Santa />} />
        <Route path="/presentcheck" element={<PresentCheck />} />
        <Route path="/childadd" element={<ChildAdd />} />
        <Route path="/presentpost" element={<PresentPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
