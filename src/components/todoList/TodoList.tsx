import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodoList } from '../_redux/action/TodoAction';


const TodoList = () => {
    const dispatch = useDispatch();
    const todoList : object[] = useSelector((state)=> state.TodoReducer.todoList);
    // const isLaoding : boolean = useSelector((state)=> state.TodoReducer.isLaoding);
console.log('todoList :>> ', todoList);
    useEffect(() => {
        dispatch(getAllTodoList())
    }, [dispatch])
    return (
        <Container>
            <div className="card shadow-sm p-3 mt-5">
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Create Time</th>
                            <th style={{ width: "130px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Hello World</td>
                            <td>10:25 PM</td>
                            <td>
                                <button className="btn btn-sm btn-outline-success">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className="btn btn-sm btn-outline-danger ml-2">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default TodoList;