import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import EndingPage from "./pages/EndingPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/ending" element={<EndingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
