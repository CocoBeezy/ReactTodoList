import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import dev tools
import DevTools from '../containers/DevTools';

//import routes and reducers
import rootReducer from '../reducers';

const logger = createLogger();

/**
 * This variable is "true" if the application
 * is running in production.
 */
const isProduction = process.env.NODE_ENV === 'production';

export default function configureStore(initialState) {
  let store;

  if (isProduction) {
    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  }
  else {
    /**
     * Only use the DevTools component
     * when in development.
     */
    const enhancer = compose(
      applyMiddleware(thunk, logger),
      DevTools.instrument()
    );

    store = createStore(rootReducer, initialState, enhancer);
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}