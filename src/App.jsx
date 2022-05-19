import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "components";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
