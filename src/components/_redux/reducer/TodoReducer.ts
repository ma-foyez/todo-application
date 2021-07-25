import * as Types from "../types/Types";
const initiliazeState = {
  isLoading: false,
  todoList: [],
  taskForm: {
    _id: null,
    Title: '',
    Priority: ''
  }
};

function TodoReducer(state = initiliazeState, action : any) {
  switch (action.type) {
    case Types.GET_TASKS:
      console.log('action.payload :>> ', action.payload);
      return {
        ...state,
        todoList: action.payload.todoList,
        isLoading: action.payload.isLoading,
      };
      break;

    // case Types.ADD_TASK:
    //   return {
    //     ...state,
    //     taskForm: {
    //       Title: "",
    //       Priority: "",
    //     },
    //   };
    //   break;

    // case Types.GET_TASK_DETAIL:
    //   return {
    //     ...state,
    //     taskForm: action.payload,
    //   };
    //   break;

    // case Types.CHANGE_TASK_INPUT:
    //   const taskForm = { ...state.taskForm };
    //   taskForm[action.payload.name] = action.payload.value;
    //   return {
    //     ...state,
    //     taskForm,
    //   };
    //   break;

    default:
      break;
  }
  return state;
}

export default TodoReducer;