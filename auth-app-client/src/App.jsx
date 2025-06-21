// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AbcWebsite from "./pages/AbcWebsite";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/abcWebsite" element={<ProtectedRoute>
              <AbcWebsite />
            </ProtectedRoute>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
