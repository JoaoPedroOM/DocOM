import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Usuario from "../Pages/Usuario";
import Document from "../Pages/Document";
import Home from "../Pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/createDocument" element={<Home />} />
      <Route path="/document/:id" element={<Document />} />
    </Routes>
  );
}
