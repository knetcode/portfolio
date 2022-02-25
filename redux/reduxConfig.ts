import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"

import appReducer from "./reducers/appReducer"

const middleware = [thunk]

const rootReducer = combineReducers({
    app: appReducer,
})

const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose
const enhancer = composeEnhancers(applyMiddleware(...middleware))

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)
