import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaceCaturing from "./Pages/FaceCapture/FaceCaturing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FaceCaturing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
