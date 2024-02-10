import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" ml={{ lg: "20px" }}>
        <span style={{ color: "#23a056" }}>react</span>
        <span style={{ color: "#7b56fb" }}>hub</span>
      </Text>
    </Box>
  );
}

export default Logo;
