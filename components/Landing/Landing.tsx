import { Container, Heading, Text, Stack, Center } from '@chakra-ui/layout';
import { IconButton, Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';

import {
  GrLinkedinOption,
  GrGithub,
  GrTwitter,
  GrSafariOption,
  GrYoutube,
} from 'react-icons/gr';
import { ThemeToggle } from '../ThemeToggle';

export const Landing = () => {
  const MAIN_LINKS = [
    {
      icon: <GrSafariOption />,
      styles: {},
      colorScheme: 'purple',
      href: 'https://hirejustinzhang.com',
      'aria-label': 'Hire Justin Zhang',
      label: 'Hire Justin Zhang',
    },
    {
      icon: <GrSafariOption />,
      styles: {},
      colorScheme: 'purple',
      href: 'https://justinzhang.ca',
      'aria-label': 'Portfolio Website',
      label: 'Portfolio',
    },
  ];

  const SOCIAL_LINKS = [
    {
      icon: <GrLinkedinOption />,
      styles: {},
      colorScheme: 'linkedin',
      href: 'https://linkedin.com/in/justinzhang000',
      'aria-label': 'LinkedIn profile link',
    },
    {
      icon: <GrYoutube />,
      styles: {},
      colorScheme: 'red',
      href: 'https://youtube.com/justinzhang',
      'aria-label': 'YouTube channel link',
    },
    {
      icon: <GrGithub />,
      styles: {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('gray.800', 'gray.50'),
        _hover: {
          bg: useColorModeValue('gray.300', 'gray.600'),
        },
      },
      href: 'https://github.com/justinnzhang',
      'aria-label': 'GitHub profile link',
    },
    {
      icon: <GrTwitter />,
      styles: {},
      colorScheme: 'twitter',
      href: 'https://twitter.com/justinnzhang',
      'aria-label': 'Twitter profile link',
    },
  ];

  const leftTextGradient = useColorModeValue('#4366C1', '#C4F1F9');
  const rightTextGradient = useColorModeValue('#A864FF', '#D6BCFA');

  return (
    <Center h='100vh' w='100vw'>
      <Container maxWidth='20rem'>
        <Stack spacing={8}>
          <Stack>
            <ThemeToggle />
            <Heading
              bgGradient={`linear(to-l, ${leftTextGradient}, ${rightTextGradient})`}
              bgClip='text'
            >
              Welcome!
            </Heading>
            <Text color={useColorModeValue('gray.500', 'gray.300')}>
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
