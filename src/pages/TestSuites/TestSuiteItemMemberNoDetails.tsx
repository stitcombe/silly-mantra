import React from 'react';
import { Card, CardBody } from '@chakra-ui/react';

export default function TestSuiteItemMemberNoDetails() {
  return (
    <Card
      variant="outline"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <CardBody>🙈 Nothing to see here!</CardBody>
    </Card>
  );
}
