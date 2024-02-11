import React, { useContext } from 'react'
import { AuthContainerProvider } from '../authContainer/AuthContainer';
import { useToast } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
    const toast = useToast();
    const {users}=useContext(AuthContainerProvider);
    if(!users){
        toast({
            title: "Please login first",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return <Navigate to={"/login"} />;
    }
    return children;
}

export default PrivateRoutes
