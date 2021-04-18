import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const links = [
  {
    name: `Blog`,
    link: `/blog`,
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `stats`,
    link: `/stats`,
  },
  {
    name: `About`,
    link: `/about`,
  },

  {
    type: `dropdown`,
    name: `Other`,
    links: [
      {
        name: `Music`,
        link: `/spotify`,
      },
      {
        name: `Bookmarks`,
        link: `/bookmarks`,
      },
    ],
  },
];

function Nav() {
  return (
    <chakra.header
      width="full"
      position="absolute"
      top={0}
      left={0}
      zIndex={10}
    >
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          alignContent="center"
          maxW="7xl"
          width="full"
        >
          <Box display="flex" alignContent="center">
            <ChakraLink
              href="/"
              fontSize="lg"
              margin="auto"
              fontWeight="semibold"
              position="relative"
              textTransform="capitalize"
              _after={{
                transition: `all 0.25s ease-in-out`,
                content: `''`,
                /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                outline: `1px solid transparent`,
                width: `0%`,
                height: `30%`,
                position: `absolute`,
                bottom: 1,
                left: 0,
                bg: useColorModeValue(`brand.200`, `gray.600`),
                zIndex: -1,
              }}
              _hover={{
                _after: {
                  width: `100%`,
                },
                color: useColorModeValue(`gray.900`, `brand.primary`),
              }}
            >
              Michael Hall
            </ChakraLink>
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;