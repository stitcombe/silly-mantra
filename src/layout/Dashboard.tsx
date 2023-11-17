import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './Header';

function Dashboard() {
  return (
    <ChakraProvider>
      <Box width="100vw" minWidth="20em">
        <Header />
        <Outlet />
      </Box>
    </ChakraProvider>
  );
}

export default Dashboard;
