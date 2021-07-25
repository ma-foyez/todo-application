import Axios from "axios";
// import { showToast } from "../../master/Helper/ToastHelper";
import * as Types from "../types/Types";

const baseURL = `https://todo-app37.herokuapp.com/`;
/**
 * Get All Task Action
 *
 */
export const getAllTodoList = () => (dispatch) => {
  const responseData = {
    todoList: null,
    status: false,
    isLoading: true
  }
  dispatch({ type: Types.GET_TASKS, payload: responseData });

  Axios.get(`${baseURL}loadTodo`).then((response) => {
    let data = response.data;
    data.sort();
    data.reverse();
    responseData.todoList = data;
    responseData.status = true;
    responseData.isLoading = false;
    dispatch({ type: Types.GET_TASKS, payload: responseData });
  });
};