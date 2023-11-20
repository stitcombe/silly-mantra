import React from 'react';
import { Card, CardBody, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export default function TestSuiteItemMemberDetails() {
  const { memberId } = useParams();
  return (
    <Card
      variant="outline"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <CardBody>
        <Heading p={6}>Member {memberId}</Heading>
      </CardBody>
    </Card>
  );
}
