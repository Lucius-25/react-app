import React from "react";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
};

export default App;
