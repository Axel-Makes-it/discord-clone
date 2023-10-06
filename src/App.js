import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/Dashboard";
import Home from "./components/Home";
import Login from "./pages/Login";
import { auth } from "./firebase";

function App() {
  const isAuthenticated = () => {
    return !!auth.currentUser;
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<DashboardPage />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
