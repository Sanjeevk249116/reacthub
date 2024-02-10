import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Charts from "../Charts";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const navigate=useNavigate()
  const { product, rootProps } = props;
  const { username} = product;
 const handleVisual=(name)=>{
    navigate(`/${name}/rating-history`)
 }
  return (
    <Stack
    maxW={'450px'}
      spacing={{
        base: "4",
        md: "5",
      }}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://t4.ftcdn.net/jpg/04/46/45/99/360_F_446459957_nIy330lOKvQ5N92WpIn5zPElIikTRB4g.jpg"
            alt={username}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: "md",
              md: "xl",
            }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="600"
            fontSize={18}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {username}
          </Text>
        </Stack>
        <HStack>
          <Text color={"blue"} fontWeight={400} fontSize={16}>
            Rating:{" "}
            <span style={{ color: "black" }}>
              {product.perfs.classical.rating}
            </span>
          </Text>
          <Spacer />
          <Text color={"green"} fontWeight={400}>
            Progress:{" "}
            <span style={{ color: "black" }}>
              {product.perfs.classical.progress}
            </span>
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" width="full" onClick={(e)=>handleVisual(username)}>
          More Visualize
        </Button>
      </Stack>
    </Stack>
  );
};
