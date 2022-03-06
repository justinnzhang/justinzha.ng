import { Container, Heading, Text, Stack, Center } from '@chakra-ui/layout';
import { IconButton, Button } from '@chakra-ui/button';

import {
  GrLinkedinOption,
  GrGithub,
  GrTwitter,
  GrSafariOption,
} from 'react-icons/gr';

const MAIN_LINKS = [
  {
    icon: <GrSafariOption />,
    styles: {},
    colorScheme: 'purple',
    href: 'https://hirejustinzhang.com',
    'aria-label': 'Hire Justin Zhang',
    label: 'Hire Justin Zhang',
  },
];

const SOCIAL_LINKS = [
  {
    icon: <GrGithub />,
    styles: {
      bg: 'gray.700',
      color: 'gray.50',
      _hover: {
        bg: 'gray.600',
      },
    },
    href: 'https://github.com/justinnzhang',
    'aria-label': 'GitHub profile link',
  },
  {
    icon: <GrLinkedinOption />,
    styles: {},
    colorScheme: 'linkedin',
    href: 'https://linkedin.com/in/justinzhang000',
    'aria-label': 'LinkedIn profile link',
  },
  {
    icon: <GrTwitter />,
    styles: {},
    colorScheme: 'twitter',
    href: 'https://twitter.com/justinnzhang',
    'aria-label': 'Twitter profile link',
  },
];

export const Landing = () => {
  return (
    <Center h='100vh' w='100vw'>
      <Container maxWidth='20rem'>
        <Stack spacing={8}>
          <Stack>
            <Heading color='gray.50'>Welcome 👋</Heading>
            <Text color='gray.400'>
              Still under construction, in the meantime check out the links
              below!
            </Text>
          </Stack>
          <Stack>
            {MAIN_LINKS.map((link) => (
              <Button
                key={link.href}
                aria-label={link['aria-label']}
                leftIcon={link.icon}
                colorScheme={link.colorScheme}
                as='a'
                href={link.href}
                target='_blank'
                {...link.styles}
              >
                {link.label}
              </Button>
            ))}
            <hr />
            {SOCIAL_LINKS.map((link) => (
              <IconButton
                key={link.href}
                aria-label={link['aria-label']}
                icon={link.icon}
                colorScheme={link.colorScheme}
                as='a'
                href={link.href}
                target='_blank'
                {...link.styles}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Center>
  );
};
