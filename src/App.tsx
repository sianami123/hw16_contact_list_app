import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import ContactsPage from "./pages/contacts_page";
import LoginPage from "./pages/login_page";
function App() {
  return (
    <BrowserRouter>
      <div className=" bg-gray-100 p-2">
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/contacts" replace />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
