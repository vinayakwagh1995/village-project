import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddNews from "./pages/AddNews";
import AddGallery from "./pages/AddGallery";
import ManageNews from "./pages/ManageNews";
import ManageGallery from "./pages/ManageGallery";
import ManageContent from "./pages/ManageContent";

// Context Create
export const Context = createContext();

function AppWrapper() {

  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<App />} />

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />
          <Route path="/add-news" element={<AddNews />} />

<Route path="/add-gallery" element={<AddGallery />} />

<Route path="/manage-news" element={<ManageNews />} />

<Route path="/manage-gallery" element={<ManageGallery />} />

<Route
  path="/manage-content"
  element={<ManageContent />}
/>

        </Routes>

      </BrowserRouter>

    </Context.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppWrapper />
);