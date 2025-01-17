import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

export const WIP = (): React.ReactElement => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="full"
    >
      <Heading>This page is currently a work in progress</Heading>
      <Text color="gray.500">Check back later :)</Text>
    </Flex>
  );
};
