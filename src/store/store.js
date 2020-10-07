import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './Products/Products.reducer';

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer);

export default store;