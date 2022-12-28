// import count from './count/reducer'
// import tick from './tick/reducer'
// @ts-nocheck
import combinedReducer from 'common/store/reducers';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// const combinedReducer = combineReducers({
//   count,
//   tick,
// })

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    // omit hydration on client side rendering
    if (state.device.status === 'initialized') {
      return state;
    }

    // only hydrate on the SSR call
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  }
  return combinedReducer(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
