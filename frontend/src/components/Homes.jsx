import React from "react";
import App from "../pages/products/App";
import NavBar from "../navbar/NavBar";
import { Box } from "@chakra-ui/react";

function Homes() {
  return (
    <Box>
      <Box bg={"blue.900"}>
        <NavBar />
      </Box>
      <App />
    </Box>
  );
}

export default Homes;
