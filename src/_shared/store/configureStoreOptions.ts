import { ConfigureStoreOptions } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { builderGameRootReducer } from '../../builderGame/store';
import { matchesApi } from '../../match/store';
import { playerApi } from '../../player/store';

const reducers = {
  [playerApi.reducerPath]: playerApi.reducer,
  [matchesApi.reducerPath]: matchesApi.reducer,
  builderGame: builderGameRootReducer,
};

const middleware: ConfigureStoreOptions['middleware'] = getDefaultMiddleware =>
  getDefaultMiddleware().concat(playerApi.middleware, matchesApi.middleware);

declare module 'react-redux' {
  type LocalRootReducers = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>;
  };

  export interface DefaultRootState extends LocalRootReducers {}
}

const reducer = combineReducers(reducers);

export const configureStoreOptions = {
  reducer,
  middleware,
};
