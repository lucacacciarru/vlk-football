import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { LandingLayout } from './landing/components';
import { Landing } from './landing/pages';
import { initI18n } from './_shared/i18n';
import { PATHS } from './_shared/types';
import { CreateTeams, PreMatch } from './builderGame/pages';
import { Match, Matches } from './match/pages';

i18n.use(initReactI18next).init(initI18n);

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PATHS.INDEX} element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path={PATHS.CREATE_TEAM} element={<CreateTeams />} />
        <Route path={PATHS.PRE_MATCH} element={<PreMatch />} />
        <Route path={PATHS.MATCH} element={<LandingLayout />}>
          <Route index element={<Matches />} />
          <Route path={PATHS.ENTITY} element={<Match />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
