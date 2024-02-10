import React from "react";
import { Box } from "@chakra-ui/react";
import MainRouters from "./routers/MainRouters";
import NavBar from "./navbar/NavBar";

function App() {
  return( <Box >
    <Box bg={"blue.900"}>
      <NavBar/>
    </Box>
    <MainRouters/>
  </Box>
  )
}

export default App;
