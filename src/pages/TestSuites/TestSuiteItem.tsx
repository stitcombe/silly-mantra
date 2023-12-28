import React from 'react';
import { Box, Flex, Card, CardBody, Heading } from '@chakra-ui/react';
import { Outlet, useParams, Link } from 'react-router-dom';

export default function TestSuiteItem() {
  const { id } = useParams();
  return (
    <>
      <Heading as="h1" size="md" p={6}>
        Test Suite {id}
      </Heading>
      <Box height="25vh" mx={6} mb={6}>
        <Flex align="flex-start" justifyContent="space-between">
          <Link to={`/test-suites/${id}`}>
            <Card
              h="25vh"
              minW="22%"
              cursor="pointer"
              align="center"
              variant="outline"
            >
              <CardBody>
                <Heading as="h1">Summary</Heading>
              </CardBody>
            </Card>
          </Link>
          <Link to={`/test-suites/${id}/members`}>
            <Card
              h="25vh"
              minW="22%"
              cursor="pointer"
              align="center"
              variant="outline"
            >
              <CardBody>
                <Heading as="h1">Members</Heading>
              </CardBody>
            </Card>
          </Link>
          <Card
            h="25vh"
            minW="22%"
            cursor="pointer"
            align="center"
            variant="outline"
          >
            <CardBody>
              <Heading as="h1">Coverages</Heading>
            </CardBody>
          </Card>
          <Card
            h="25vh"
            minW="22%"
            cursor="pointer"
            align="center"
            variant="outline"
          >
            <CardBody>
              <Heading as="h1">Test Cases</Heading>
            </CardBody>
          </Card>
        </Flex>
      </Box>
      <Box minH="55vh" bgColor="blue.100">
        <Outlet />
      </Box>
    </>
  );
}
