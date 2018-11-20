import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
const loggerMiddleware = createLogger();
export default function configureStore(preloadedState?: any) {
        return createStore(
                rootReducer,
                preloadedState,
                applyMiddleware(thunkMiddleware, loggerMiddleware)
        );
}
