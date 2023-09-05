import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

export function ScrollToTopButton(): JSX.Element {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    // Listen for scroll events and toggle the button visibility
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <Tooltip
      hasArrow
      label="Scroll to top"
      placement="top"
      transition="opacity 0.3s ease-in-out"
      isDisabled={!showButton}
    >
      <IconButton
        aria-label="scroll to top"
        icon={<FaArrowUp />}
        isRound
        shadow="md"
        transition="opacity 0.3s ease-in-out"
        opacity={showButton ? 1 : 0}
        position="fixed"
        bottom={0}
        mb={4}
        right={0}
        mr={4}
        zIndex={1}
        onClick={scrollToTop}
        bg="blue.500"
        color="white"
        _hover={{ bg: 'blue.600' }}
        role="tooltip"
      />
    </Tooltip>
  );
}
