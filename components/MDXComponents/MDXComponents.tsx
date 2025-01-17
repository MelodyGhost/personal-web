import Link from 'next/link';
import { css } from '@emotion/react';
import {
  Box,
  Link as ChakraLink,
  Text,
  useColorMode,
  Flex,
  UnorderedList,
  BoxProps,
  useColorModeValue,
  chakra,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react';
import LineHeading from '../LineHeading';
import React from 'react';
import Image from 'next/image';

interface CustomLinkProps {
  href: string;
}

export * from './Definition';

export const CustomLink: React.FC<CustomLinkProps> = (
  props
): React.ReactElement => {
  const { colorMode } = useColorMode();
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <ChakraLink
          width="calc(100% + 28px)"
          position="absolute"
          ml={'-0.7em'}
          height="full"
          maxW="700px"
          {...props}
          cursor="pointer"
          _after={{
            content: "'#'",
            visibility: 'hidden',

            color: colorMode === 'light' ? 'gray.400' : 'gray.600',
          }}
          _hover={{
            _after: {
              visibility: 'visible',

              textDecoration: 'none',
            },
          }}
        />
      </Link>
    );
  }

  return (
    <ChakraLink
      _hover={{ textDecoration: 'none' }}
      color={colorMode === 'light' ? 'blue.600' : 'blue.200'}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export const CustomImage: React.FC<any> = ({
  alt,
  ratio,
  border,
  chakraWidth,
  ...props
}): React.ReactElement => {
  return (
    <Flex direction="column" my={7}>
      {ratio ? (
        <AspectRatio width={chakraWidth || 'full'} mx={'auto'} ratio={ratio}>
          <Image className={`${border && 'border'}`} alt={alt} {...props} />
        </AspectRatio>
      ) : (
        <Image className={`${border && 'border'}`} alt={alt} {...props} />
      )}
      <style jsx global>{`
        .border {
          border-radius: var(--chakra-radii-xl);
        }
      `}</style>
      <Text
        textAlign="center"
        fontWeight={'semibold'}
        mt={2}
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        {alt}
      </Text>
    </Flex>
  );
  ``;
};

export const CustomTitle: React.FC<any> = (props): React.ReactElement => {
  const title = props.children[0].props.parentName;
  const titleSize = {
    h1: ['2xl', '4xl'],
    h2: ['xl', '2xl'],
    h3: ['lg', 'xl'],
    h4: ['md', 'lg'],
    h5: ['sm', 'md'],
    h6: 'sm',
  };

  return (
    <Flex>
      <LineHeading as={title} fontSize={titleSize[title]} mt={5} {...props}>
        {props.children}
      </LineHeading>
    </Flex>
  );
};

export const CustomText: React.FC<{ children: string }> = ({
  children,
}): React.ReactElement => {
  return (
    <Text fontSize={'md'} mt={3}>
      {children}
    </Text>
  );
};

export const CustomUnorderedList: React.FC<{ children: any }> = ({
  children,
}): React.ReactElement => {
  return (
    <UnorderedList spacing={'4px'} mt={3}>
      {children}
    </UnorderedList>
  );
};

export const CustomListItem: React.FC<{ children: any }> = ({
  children,
}): React.ReactElement => {
  return (
    <ListItem color={useColorModeValue('brand.500', 'brand.300')}>
      <chakra.span color={useColorModeValue('black', 'white')}>
        {children}
      </chakra.span>
    </ListItem>
  );
};

export const Padding: React.FC<BoxProps> = (props): React.ReactElement => {
  return <Box width="full" height="1px" {...props} />;
};

export const RemarkTitle: React.FC<any> = (props): React.ReactElement => {
  return (
    <chakra.div
      {...props}
      mt={8}
      px={5}
      py={3}
      color={useColorModeValue('gray.800', 'gray.200')}
      border={'1px solid'}
      borderBottom={'none'}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      borderTopRadius={'xl'}
      bg={useColorModeValue('gray.200', 'gray.700')}
      fontSize="sm"
      fontFamily={'mono'}
      fontWeight="bold"
    />
  );
};

export const CustomDiv: React.FC<any> = (props): React.ReactElement => {
  if (props?.className?.includes('remark-code-title')) {
    return <RemarkTitle {...props} />;
  }

  return <chakra.div {...props} />;
};

export const CustomPre: React.FC<any> = (props): React.ReactElement => {
  return (
    <chakra.pre
      {...props}
      borderRadius="lg"
      mt={8}
      py={5}
      px={5}
      overflow={'hidden'}
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.800', 'gray.50')}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
    />
  );
};

const codeStyles = css`
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--chakra-colors-yellow-500);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--chakra-colors-yellow-500);
  }
`;

const lightCodeStyles = css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-700);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-600);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-600);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-600);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-600);
  }
`;

const darkCodeStyles = css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-300);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-300);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-300);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-300);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-300);
  }
`;

export const CustomCode: React.FC<any> = (props): React.ReactElement => {
  return (
    <chakra.code
      {...props}
      color={useColorModeValue('gray.800', 'gray.200')}
      bg={useColorModeValue('gray.100', 'gray.900')}
      wordBreak={'break-word'}
      whiteSpace={'pre-wrap'}
      css={useColorModeValue({ ...lightCodeStyles }, { ...darkCodeStyles })}
    />
  );
};

export const TextColorMode = (): string => {
  const value = useColorModeValue('dark', 'light');
  return value;
};
