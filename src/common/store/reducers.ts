
import { SEOReducer } from './shared/SEOReducer/SEOReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  seo: SEOReducer,
});

export default reducers;

export type IRootState = ReturnType<typeof reducers>;
