const { configureStore , combineReducers  } = require("@reduxjs/toolkit");
import { persistReducer,persistStore } from 'redux-persist';
import shoppingCartReducer from '../redux/features/ShoppingCart/ShoppingCartSlice'
import userReducer from '../redux/features/users/UserSlice'
import localStorageLib from 'redux-persist/lib/storage';
import sessionStorageLib from 'redux-persist/lib/storage/session';
// const configuration={
//     key:"globalStorage",
//     storage,
// };
const localStorageConfiguration = {
    key: "root",
    storage: localStorageLib,
    blacklist: ["user"],
  };
  const sessionStorageConfiguration = {
    key: "user",
    storage: sessionStorageLib,
  };

  const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    user: persistReducer(sessionStorageConfiguration, userReducer),
  });
  
  const persistedReducer = persistReducer(localStorageConfiguration, rootReducer);
  
  export const ReduxPersistStore = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(ReduxPersistStore);
  