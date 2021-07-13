import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import phonebookReducer from './phonebook/phonebook-reducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
    logger,
];

const store = configureStore({
    reducer: {
     phonebook: phonebookReducer
    },
    middleware,
    devTools:process.env.NODE_ENV === 'development'
});


export default store;