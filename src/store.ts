import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favorite';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
