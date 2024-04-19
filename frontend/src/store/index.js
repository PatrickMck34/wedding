import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import chatReducer from "./chatStore";
import sectionReducer from "./section";
import providerReducer from "./provider";
import sessionReducer from "./session"

const rootReducer = combineReducers({
  chat: chatReducer,
  section: sectionReducer,
  provider: providerReducer,
  session: sessionReducer
});




let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
