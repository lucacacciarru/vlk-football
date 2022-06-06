import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { initI18n } from '../i18n';
import { customTheme } from '../theme';
import { getStoreForTesting } from './getStoreForTesting';
import { CustomOptions } from './types';

i18n.use(initReactI18next).init(initI18n);

export const TestWrapper: React.FC<React.PropsWithChildren<CustomOptions>> = ({
  children,
  ...props
}) => {
  const initialRoutes = props.initialRoutes || ['/'];
  const store = getStoreForTesting({ mocks: props.mocks });

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router initialEntries={initialRoutes}>{children}</Router>
      </ChakraProvider>
    </Provider>
  );
};
