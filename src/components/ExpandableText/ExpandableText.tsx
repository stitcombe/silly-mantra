import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

export function ExpandableText({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Text whiteSpace="pre-wrap">
        {expanded ? text : text.slice(0, maxLength)}
        {text.length > maxLength && !expanded && '...'}
        {text.length > maxLength && (
          <Button size="sm" variant="link" onClick={toggleExpand}>
            {expanded ? null : 'more'}
          </Button>
        )}
      </Text>
    </Box>
  );
}
