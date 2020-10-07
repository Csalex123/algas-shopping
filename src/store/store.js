import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './Products/Products.reducer';

const rootReducer = combineReducers({
    products: productsReducer,
});

const persistedReducer = persistReducer({
    key: 'products',
    storage
}, rootReducer);

const store = createStore(persistedReducer);
const persistedStore = persistStore(store);

export { store, persistedStore };