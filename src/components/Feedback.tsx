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
  { title: '😀 General feedback', short: 'feedback' },
  { title: '💡 I have an idea', short: 'idea' },
  { title: '🐞 I found a bug', short: 'bug' },
];

function Feedback() {
  const [showForm, setShowForm] = useState(false);
  const [popHeader, setPopHeader] = useState('What feedback do you have?');
  const [showThanks, setShowThanks] = useState(false);

  const toggleForm = (header: string) => {
    setShowForm(true);
    setPopHeader(header);
  };

  const handleStartOver = () => {
    setShowForm(false);
    setPopHeader('What feedback do you have?');
  };

  const toggleThanks = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 5000);
  };

  const firstFieldRef = useRef(null);
  const { onOpen, onClose, isOpen } = useDisclosure();

  return showThanks ? (
    // display non-functional thanks button after form submit
    <Button leftIcon={<MdOutlineChat />}>Thanks!</Button>
  ) : (
    // main popover
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
        {/* toggle to close button when popover is opened */}
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
          <Form onBackClick={handleStartOver} onSubmit={toggleThanks} />
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
                  key={option.title}
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
