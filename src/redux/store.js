import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
// if (process.env.NODE_ENV === "developement") {
//   middlewares.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// export default { store, persistore };
