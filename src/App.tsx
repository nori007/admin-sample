import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
import axiosConfig from "./axiosConfig";

function App () {
  
  axiosConfig()

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;