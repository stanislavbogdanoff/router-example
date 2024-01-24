import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import "./App.css";
import Navbar from "./components/Navbar";

const userData = [
  {
    id: 123,
  },
  {
    id: 456,
  },
  {
    id: 228,
  },
  {
    id: 688,
  },
  {
    id: 921,
  },
];

function App() {
  return (
    <Router>
      {/* <Navbar userData={userData} /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
