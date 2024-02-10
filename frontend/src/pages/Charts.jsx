import { Avatar, Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { points } from "../pages/products/_data";
import ChartData from "./ChartData";
import NavBar from "../navbar/NavBar";

function Charts() {
  const { username } = useParams();
  console.log(username);
  console.log(points);
  const array = [];
  for (let i = 29; i >= 0; i--) {
    array.push(points[i][3]);
  }
  console.log(array);
  return (
    <Box>
      <Box bg={"blue.900"}>
        <NavBar />
      </Box>
      <Heading display={"flex"} justifyContent={"center"} mt={"10px"}>
        <Avatar mr={"20px"} name={username} />
        {username}
      </Heading>
      <Text
        ml={"5%"}
        mt={"1%"}
        fontSize={18}
        fontWeight={500}
        color={"red"}
        p={5}
      >
        Last 30 days Rating History
      </Text>
      <ChartData array={array} />
    </Box>
  );
}

export default Charts;
