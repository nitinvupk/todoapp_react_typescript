import React from "react";
import { DeleteTask, Todo, ToggleCompleteTask } from "../constants/ToDoTypes";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleCompleteTask: ToggleCompleteTask;
  deleteTask: DeleteTask;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompleteTask,
  deleteTask
}) => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <React.Fragment>
      <div>
        <h3>Welcome User</h3>
        <span>Today is {date}</span>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <TodoListItem
                key={todo.text}
                todo={todo}
                toggleCompleteTask={toggleCompleteTask}
                deleteTask={deleteTask}
              />
            ))}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
