import { Routes, Route } from "react-router-dom";
import App from "../App";

export function AppRoutes() {
  return (
    <Routes>
        <Route index path="/" element={<App/>}/>
    </Routes>
  );
}
