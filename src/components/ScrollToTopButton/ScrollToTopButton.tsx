import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton(): JSX.Element {
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
    <IconButton
      aria-label="scroll to top"
      icon={<FaArrowUp />}
      isRound
      shadow="md"
      style={{
        opacity: showButton ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      position="fixed"
      bottom={6}
      right={6}
      zIndex={9999}
      onClick={scrollToTop}
      bg="blue.500"
      color="white"
      _hover={{ bg: 'blue.600' }}
    />
  );
}
