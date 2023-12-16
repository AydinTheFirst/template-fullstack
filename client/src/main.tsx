import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import { Theme } from "./components/Theme";
import { ToastBox } from "./components/Toast";

import { App } from "./pages/App";

import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

document.body.classList.add("bg-slate-200", "dark:bg-gray-900");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Theme />
    <ToastBox />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);
