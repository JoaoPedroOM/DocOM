import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../utils/PrivateRoute";
import { PublicRoute } from "../utils/PublicRoute";
import App from "../App";
import Usuario from "../Pages/Usuario";
import Document from "../Pages/Document";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <App />
          </PublicRoute>
        }
      />

      <Route
        path="/usuario"
        element={
          <PublicRoute>
            <Usuario />
          </PublicRoute>
        }
      />
      <Route
        path="/createDocument"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/document/:id"
        element={
          <PrivateRoute>
            <Document />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
