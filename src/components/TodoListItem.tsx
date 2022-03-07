import React, { useState } from "react";
import { DeleteTask, Todo, ToggleCompleteTask } from '../constants/ToDoTypes'
import '../styles/TodoListItem.css'

interface TodoListItemProps {
  todo: Todo;
  toggleCompleteTask: ToggleCompleteTask;
  deleteTask: DeleteTask;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleCompleteTask,
  deleteTask
}) => {

  return (
    <tr>
      <td className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleCompleteTask(todo)}
          checked={todo.complete}
        />
        <span className="todoText">{todo.text}</span>
      </td>
      <td className="status">
        <span>{todo.complete ? "Completed" : "Pending"}</span>
      </td>
      <td>
        <button className="deleteBtn" type="submit" onClick={(e) => deleteTask(todo, e)}>Delete</button>
      </td>
    </tr>
  );
};
