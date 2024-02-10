import React, { useEffect, useState } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { chessGeting } from "../../redux/action";
import Pagination from "../Pagination";

const App = () => {
  const { chessValue, isLoading } = useSelector((pre) => pre.reducer);
  const [pages, setPages] = useState(1);
  const products = chessValue.users;
  const length = chessValue.length;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chessGeting(pages));
  }, [pages]);
  return (
    <Box
      maxW={"95%"}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      {isLoading ? (
        <Flex
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
        </Flex>
      ) : (
        <ProductGrid>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
      <Pagination setPages={setPages} length={length} />
    </Box>
  );
};

export default App;
