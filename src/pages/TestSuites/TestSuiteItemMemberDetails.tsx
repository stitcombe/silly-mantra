import React from 'react';
import { Card, CardBody, Heading } from '@chakra-ui/react';
import { useOutletContext, useParams } from 'react-router-dom';
import { IMember } from './TestSuiteItemMembers';

export default function TestSuiteItemMemberDetails() {
  const { memberId } = useParams();
  const members = useOutletContext<IMember[]>();

  const member = members.find((item) => item.id.toString() === memberId);

  return (
    <Card
      variant="outline"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <CardBody>
        <Heading p={6}>{member?.name}</Heading>
      </CardBody>
    </Card>
  );
}
