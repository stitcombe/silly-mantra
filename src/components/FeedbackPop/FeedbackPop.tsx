import React, { useState, useRef } from 'react';
import {
  Box,
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
import { FiThumbsUp } from 'react-icons/fi';
import { Form } from 'components/FeedbackPop/Form';

const feedbackOptions = [
  { title: '😀 General feedback', short: 'feedback' },
  { title: '💡 I have an idea', short: 'idea' },
  { title: '🐞 I found a bug', short: 'bug' },
];

export function FeedbackPop() {
  const [showForm, setShowForm] = useState(false);
  const [popHeader, setPopHeader] = useState('What feedback do you have?');
  const [showThanks, setShowThanks] = useState(false);
  const firstFieldRef = useRef(null);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const toggleForm = (header: string) => {
    setShowForm(true);
    setPopHeader(header);
  };

  const handleBack = () => {
    setShowForm(false);
    setPopHeader('What feedback do you have?');
  };

  const toggleThanks = () => {
    setShowThanks(true);
    onClose();
    handleBack();
    setTimeout(() => {
      setShowThanks(false);
    }, 5000);
  };

  return (
    <Box position="fixed" zIndex={1000} bottom={0} right={0} m="2rem">
      {showThanks ? (
        // display non-functional thanks button after form submit
        <Button leftIcon={<FiThumbsUp />}>Thanks!</Button>
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
              <Form onBack={handleBack} onSubmit={toggleThanks} />
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
      )}
    </Box>
  );
}
