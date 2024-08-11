import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./components/navbar/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";
import WhatsButton from "./components/whatsButton/WhatsButton.jsx";
import SidebarWithHeader from "./components/navbar/Navbar.jsx";

const Root = () => {
  return (
    <React.StrictMode>
      <div id="overlay" className="overlay"></div>
      <ChakraProvider>
        <Router>
          <SidebarWithHeader />
          <App />
          <WhatsButton />
          <Footer />
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
