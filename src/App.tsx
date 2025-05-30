import React from 'react';
import theme from './theme/theme';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal'>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
