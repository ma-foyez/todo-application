import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage';


enum PriorityEnum {
    high   = "high",
    medium = "medium",
    low    = "low"
}

type FormData = {
    title     : string;
    priority  : PriorityEnum;
};

const AddTodo = () => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log(data);
    }


       return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label className="form-label mt-2">Title</label>
                <Form.Control
                    type        = "text"
                    placeholder = "Title"
                    className   = "fromStyle"
                    {...register("title", { required: true })}
                />
                {errors.title?.type === 'required' && <ErrorMessage errorText="Title can't be blank!" />}
            </div>
            <div className="form-group">
                <label className="form-label mt-2">Priority</label>
                <select className="form-control sm" {...register("priority")} >
                    <option selected disabled>Select Priority Level</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                {errors.priority?.type === 'required' && <ErrorMessage errorText="Priority can't be blank!" />}

            </div>

            <input className="btn btn-sm btn-success float-right" type="submit" />
        </form>
    );
};

export default AddTodo;