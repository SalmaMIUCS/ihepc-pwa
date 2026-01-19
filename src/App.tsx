import { Routes, Route, Navigate } from "react-router-dom";
import Shell from "./components/Shell";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signupPage";
import PendingPage from "./pages/PendingPage";
import FeedPage from "./pages/FeedPage";
import CommitteesPage from "./pages/committeesPage";
import Profilepage from "./pages/Profilepage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/pending" element={<PendingPage />} />

      <Route element={<Shell />}>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/committees" element={<CommitteesPage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Route>

      <Route path="/" element={<Navigate to="/feed" replace />} />
    </Routes>
  );
}
