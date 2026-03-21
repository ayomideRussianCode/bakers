import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from './pages/LogIn.jsx';
import Password from "./pages/Password.jsx";

// import Auth from './components/Auth.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/passwordpage" element={<Password />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
