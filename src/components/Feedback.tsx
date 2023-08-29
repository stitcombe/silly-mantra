import React, { useState, useRef } from 'react';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  ButtonGroup,
  IconButton,
  useDisclosure,
  PopoverArrow,
} from '@chakra-ui/react';
import { MdOutlineChat, MdClose } from 'react-icons/md';
import Form from './Feedback/Form';

const feedbackOptions = [
  { id: 1, title: '😀 General feedback', short: 'feedback' },
  { id: 2, title: '💡 I have an idea', short: 'idea' },
  { id: 3, title: '🐞 I found a bug', short: 'bug' },
];

function Feedback() {
  const [showForm, setShowForm] = useState(false);
  const [popHeader, setPopHeader] = useState('What feedback do you have?');

  const toggleForm = (header: string) => {
    setShowForm(true);
    setPopHeader(header);
  };

  const handleStartOver = () => {
    setShowForm(false);
    setPopHeader('What feedback do you have?');
  };

  const firstFieldRef = useRef(null);
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      placement="top-end"
      closeOnBlur={false}
      initialFocusRef={firstFieldRef}
      closeOnEsc={false}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        {isOpen ? (
          <IconButton aria-label="close" icon={<MdClose />} isRound />
        ) : (
          <Button leftIcon={<MdOutlineChat />}>Feedback</Button>
        )}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader background="black" color="white" fontSize={22}>
          {popHeader}
        </PopoverHeader>
        {showForm ? (
          // <Submitted onStartOver={handleStartOver} />
          <Form onBackClick={handleStartOver} />
        ) : (
          <PopoverBody>
            <ButtonGroup
              flexDirection="column"
              alignContent="center"
              variant="ghost"
              spacing={2}
            >
              {feedbackOptions.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => toggleForm(option.title)}
                >
                  {option.title}
                </Button>
              ))}
            </ButtonGroup>
          </PopoverBody>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default Feedback;
