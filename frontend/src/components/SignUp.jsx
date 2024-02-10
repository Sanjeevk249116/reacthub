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
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signUpPost } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { AuthContainerProvider } from "../authContainer/AuthContainer";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const status = useSelector((pre) => pre.reducer.status);
  const [showPassword, setShowPassword] = useState(false);
  const{ setUsers}=useContext(AuthContainerProvider)
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    dob: "",
  });

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleForm = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const allSubmit = (e) => {
    e.preventDefault();
    const ReturnData = validationData();

    if (ReturnData == 50) {
      dispatch(signUpPost(details));
    }
  };

  useEffect(() => {
    if (status == 410) {
      toast({
        title: "Already register",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (status == 200) {
      toast({
        title: "registration successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setUsers(true)
      navigate("/");
    }
  }, [status]);

  const validationData = () => {
    const { name, email, phone, password, dob, confirmpassword } = details;
    if (name.length <= 4 || name.length >= 20) {
      toast({
        title: "Enter Full Name",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else if (
      !email.includes(".com") ||
      !email.includes("@") ||
      email.length <= 8
    ) {
      toast({
        title: "Enter Correct Email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else if (phone.length <= 9 || phone.length >= 11) {
      toast({
        title: "Enter Phone Number",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else if (dob.length == 0) {
      toast({
        title: "Enter Date of Birth",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return 100;
    } else if (password !== confirmpassword || password.length < 2) {
      toast({
        title: "password and confirm-password should be same.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 100;
    } else {
      return 50;
    }
  };

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
        <Flex
          fontSize={28}
          fontWeight={700}
          color="teal.400"
          justifyContent={"center"}
        >
          Welcome to my chating app
        </Flex>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p={{ base: "10px", md: "2rem" }}
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
                    type="name"
                    name="name"
                    placeholder="Enter Full Name"
                    onChange={handleForm}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleForm}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input
                    mr={4}
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleForm}
                  />
                  <Input
                    width={"70%"}
                    display={{ base: "none", md: "block" }}
                    type="date"
                    name="dob"
                    placeholder="DOB"
                    onChange={handleForm}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CalendarIcon color="gray.300" />}
                  />
                  <Input
                    display={{ base: "block", md: "none" }}
                    type="date"
                    name="dob"
                    color="gray.500"
                    placeholder="DOB"
                    onChange={handleForm}
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleForm}
                  />
                </InputGroup>
              </FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  name="confirmpassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={handleForm}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                borderRadius={4}
                onClick={(e) => allSubmit(e)}
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        already resister ?{" "}
        <Link color="teal.500" href="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;
