import { ChakraProvider } from "@chakra-ui/react";
import { EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MemoryRouter as Router } from "react-router-dom";
import { initI18n } from "../i18n";
import { customTheme } from "../theme";

type Props = {
  store: EnhancedStore;
  initialRoutes?: string[];
};

i18n.use(initReactI18next).init(initI18n);

export const TestWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  store,
  initialRoutes = ["/"],
  children,
}) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router initialEntries={initialRoutes}>{children}</Router>
      </ChakraProvider>
    </Provider>
  );
};
