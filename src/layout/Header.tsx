import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  MenuDivider,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import {
  FiChevronDown,
  FiCheck,
  FiArrowRight,
  FiSearch,
  FiMoreHorizontal,
} from 'react-icons/fi';

function SiteIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 16 16"
      width="32"
      height="32"
      fill="currentColor"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

export default function Header(): JSX.Element {
  return (
    <Box
      as="header"
      role="banner"
      p="8px"
      borderBottomStyle="solid"
      borderBottomWidth="1px"
      position="sticky"
      zIndex={1}
      padding="8px"
      top={0}
      bg="white"
    >
      <Flex p={2} flexWrap="wrap" justifyContent="space-between">
        <Flex alignItems="center" boxSizing="border-box">
          {/* Icon + Site Name */}
          <Flex mr={3} alignItems="center" cursor="pointer">
            <SiteIcon />
            <Heading as="h4" size="sm" mr={3} ml={2} fontWeight="600">
              GitHub Docs
            </Heading>
          </Flex>
          {/* Version Menu */}
          <Box
            borderLeftStyle="solid"
            borderLeftWidth="1px"
            pl={3}
            display={{ base: 'none', sm: 'block' }}
          >
            <Box boxSizing="border-box">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FiChevronDown />}
                  variant="ghost"
                >
                  Version: Current
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FiCheck />}>Current</MenuItem>
                  <MenuItem pl={9}>Next</MenuItem>
                  <MenuItem pl={9}>Alpha</MenuItem>
                  <MenuItem pl={9}>Beta</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    All Releases <Icon as={FiArrowRight} ml={1} />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <IconButton
            aria-label="search"
            icon={<FiSearch />}
            variant="outline"
          />
          <Box pl={3} display={{ base: 'block', sm: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="more menu"
                icon={<FiMoreHorizontal />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Test 1</MenuItem>
                <MenuItem>Test 2</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
