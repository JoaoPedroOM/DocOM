import { Routes, Route } from "react-router-dom";
import App from "../App";
import Usuario from "../Pages/Usuario";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usuario" element={<Usuario />} />
    </Routes>
  );
}
