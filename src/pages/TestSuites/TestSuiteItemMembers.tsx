import React, { useLayoutEffect } from 'react';
import { Heading, Box, CardBody, Card, Stack, Flex } from '@chakra-ui/react';
import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import { useActiveMemberId } from 'hooks/useActiveMemberId';

export interface IMember {
  id: number;
  name: string;
}

const members: IMember[] = [
  {
    id: 1,
    name: 'Joe Madden',
  },
  {
    id: 2,
    name: 'Wilen Bode',
  },
  {
    id: 3,
    name: 'Willie Rose',
  },
  {
    id: 4,
    name: 'Brock Rock',
  },
  {
    id: 5,
    name: 'Rose Breck',
  },
  {
    id: 6,
    name: 'Sam Smith',
  },
  {
    id: 7,
    name: 'Josh Dobbs',
  },
];

export default function TestSuiteItemMembers() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useActiveMemberId(id, null);

  useLayoutEffect(() => {
    if (activeId) {
      navigate(`/test-suites/${id}/members/${activeId}`, { replace: true });
    }
  }, [activeId, id, navigate]);

  return (
    <Box mx={6}>
      <Heading as="h1" size="xl">
        Members
      </Heading>
      <Flex direction="row" justify="flex-start" gap={4} py={6}>
        <Stack spacing={2} left={0} w="30%">
          {members.map((item) => (
            <Card key={item.id} variant="outline">
              <Link
                to={`/test-suites/${id}/members/${item.id}`}
                onClick={() => setActiveId(item.id)}
              >
                <CardBody>{item.name}</CardBody>
              </Link>
            </Card>
          ))}
        </Stack>
        <Box w="100%">
          <Outlet context={members} />
        </Box>
      </Flex>
    </Box>
  );
}
