import React from "react";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { LoadingComponent } from "./components";

const App = () => {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loading" element={<LoadingComponent />} />
      </Routes>
    </main>
  );
};

export default App;
