import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { fetchPlayerApi } from "./player/store/api";
import { initI18n } from "./_shared/i18n";
import { PATHS } from "./_shared/types";

i18n.use(initReactI18next).init(initI18n);

function App() {
  useEffect(() => {
    fetchPlayerApi();
  });
  return (
    <div className="App">
      <Routes>
        <Route path={PATHS.INDEX}>
          <Route index element={<p>test</p>} />
        </Route>
        <Route path={PATHS.CREATE_TEAM} element={<>Create team</>} />
        <Route path={PATHS.PRE_MATCH} element={<>Pre match</>} />
        <Route path={PATHS.PREVIEW_MATCH} element={<>Preview Match</>} />
      </Routes>
    </div>
  );
}

export default App;
