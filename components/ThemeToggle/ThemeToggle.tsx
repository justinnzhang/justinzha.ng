import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Switch } from '@chakra-ui/switch';
import { Stack } from '@chakra-ui/layout';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const selectedColor = useColorModeValue('purple.500', 'purple.50');

  return (
    <Stack
      direction='row'
      spacing={2}
      align='center'
      color={useColorModeValue('gray.500', 'gray.100')}
    >
      <RiSunLine />
      <Switch
        size='md'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <RiMoonFill />
    </Stack>
  );
};
