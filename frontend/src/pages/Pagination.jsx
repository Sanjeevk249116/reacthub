import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Pagination({ length, setPages }) {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const pagesNo = Math.ceil(length / 20);

    setTotalPages(pagesNo);
  }, [length]);
  return (
    <Flex justifyContent={"center"} mt={"2%"}>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          border={"1px solid black"}
          m="10px"
          onClick={() => setPages(index + 1)}
        >
          {index + 1}{" "}
        </Button>
      ))}
    </Flex>
  );
}

export default Pagination;
