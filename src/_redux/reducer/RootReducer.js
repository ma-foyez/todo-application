import { combineReducers } from "redux";
import TodoReducer from "../../components/_redux/reducer/TodoReducer";
// import TodoReducer from "../../components/_redux/reducer/TodoReducer";

// combine all of the reducers here
const RootReducer = combineReducers({
    TodoReducer: TodoReducer,
});

export default RootReducer;