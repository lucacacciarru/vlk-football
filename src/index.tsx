import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/provider';
import { customTheme } from './_shared/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './_shared/store';
import { createRoot } from 'react-dom/client';
import { theme } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
console.log(theme.components.Menu);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
