import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "../features/user/slice";

const rootReducer = combineReducers({
  user: userReducer,
});

// const combinedReducer = combineReducers({
//   auth: authReducer,
//   profile: profileReducer,
//   device: deviceReducer,
//   explore: exploreReducer,
//   book: bookReducer,
//   quotes: quotesReducer,
// });

// const rootReducer = (state, action) => {
//   if (action.type === "auth/authLogout") {
//     clearStorageToken();
//     state = undefined;
//   }
//   return combinedReducer(state, action);
// };

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   whitelist: ["device"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         ignorePaths: [],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        ignoredPaths: [],
      },
    }).concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
