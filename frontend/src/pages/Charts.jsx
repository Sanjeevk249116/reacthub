import { Avatar, Box, Container, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChartData from "./ChartData";
import NavBar from "../navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { ratingHistoryData } from "../redux/action";

function Charts() {
  const {isLoading,rating_history} = useSelector((pre) => pre.reducer);
  const dispatch = useDispatch();
  const { username } = useParams();
  console.log(isLoading);
  useEffect(() => {
    dispatch(ratingHistoryData(username));
  }, [username]);

  
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
      {isLoading?( <Flex
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          minHeight={"80vh"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>):<ChartData  array={rating_history}/>}
    </Box>
  );
}

export default Charts;
