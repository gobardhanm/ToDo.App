import React from 'react';

/**
 * props = {
 *      setIsEditing:
 *      currentTodo: 
 *      handleEditFormSubmit,
 *      handleEditInputChange
 * }
 * 
 * 
 */

function EditTodoForm(props) {
    return (
        <form onSubmit={props.handleEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <input
                name="editTodo"
                type="text"
                placeholder="Edit todo"
                value={props.currentTodo.text}
                onChange={props.handleEditInputChange}
            />
            <button>Update</button>
            <button onClick={() => props.setIsEditing(false)}>Cancel</button>
        </form>
    );
}

export default EditTodoForm;
