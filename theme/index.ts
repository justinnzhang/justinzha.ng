// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  initialColorMode: 'dark',
};

export const theme = extendTheme({ colors });
