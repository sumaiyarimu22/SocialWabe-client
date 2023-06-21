import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scencs/homePage";
import LoginPage from "scencs/loginPage";
import ProfilePage from "scencs/profilePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
