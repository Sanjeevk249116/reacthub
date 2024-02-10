import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import AuthContainer from "./authContainer/AuthContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContainer>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </AuthContainer>
);
