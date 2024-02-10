import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logInPost } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { AuthContainerProvider } from "../authContainer/AuthContainer";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(1);
  const { users, setUsers } = useContext(AuthContainerProvider);
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  var status = useSelector((pre) => pre.reducer.status);
  console.log(status);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [logDetails, setLogDetails] = useState({
    email: "",
    password: "",
  });

  const loginVal = (e) => {
    setLogDetails({ ...logDetails, [e.target.name]: e.target.value });
  };
  const checkValidation = () => {
    const { email, password } = logDetails;
    if (!email.includes(".com") || !email.includes("@") || email.length <= 8) {
      toast({
        title: "Email should be required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else if (password.length < 3) {
      toast({
        title: "password should be required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else {
      setNum((pre) => pre + 1);
      return 50;
    }
  };
  const logInData = (e) => {
    setCheck(2);
    const result = checkValidation();
    if (result == 50) {
      dispatch(logInPost(logDetails));
    }
  };

  useEffect(() => {
    if (status >= 400 && status <= 499) {
      toast({
        title: "Failed to login ",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (check == 2) {
      if (status == 200) {
        toast({
          title: "login successfull",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setCheck(1);
        setUsers(true);
        navigate("/");
      }
    }
  }, [status, num]);
  console.log(check);
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Chess App</Heading>
        <Box minW={{ base: "100%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p={{ base: "10px", md: "3rem" }}
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="email address"
                    onChange={(e) => loginVal(e)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={(e) => loginVal(e)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                onClick={(e) => logInData(e)}
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
