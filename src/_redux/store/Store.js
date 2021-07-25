import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "../reducer/RootReducer";

const middleWares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleWares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export default function Store(previousState){
    const store = createStore(
      RootReducer,
      previousState,
      composedEnhancers
      //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};