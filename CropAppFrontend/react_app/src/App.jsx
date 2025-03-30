import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Landing from "./pages/Landing";
import Disease from "./pages/Disease";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={ChatPage} />
        <Route path="/disease_detection" element={<Disease />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
