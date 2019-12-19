import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import initialState from 'reducers/initialState';
import rootReducer from 'reducers/';

export const getComposeEnhancers = () => {
    const isUsingDevTools = process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (isUsingDevTools) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize..
        });
    }
    return compose;
};

const setupStore = () => {
    const composeEnhancers = getComposeEnhancers();
    const sagaMiddleware = createSagaMiddleware();
    console.log(process.env.NODE_ENV)
    const middleware = [
        process.env.NODE_ENV === 'development' && reduxImmutableStateInvariant(),
        sagaMiddleware,
    ].filter(Boolean);

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );

    return store;
};

export default setupStore;
