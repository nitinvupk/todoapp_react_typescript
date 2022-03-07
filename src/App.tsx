import React, { useState } from "react";
import { initialTodos } from "./constants/initialTodos";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { Todo, ToggleCompleteTask, AddTodo, DeleteTask } from "./constants/ToDoTypes";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);


  const toggleCompleteTask: ToggleCompleteTask = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTask: DeleteTask = (selectedTodo, e) => {
    const updatedToDo = todos.filter(todo => {
      return todo !== selectedTodo
    });
    console.log(updatedToDo,"+++++")
    setTodos(updatedToDo);
  }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <div className="table_box">
        <TodoList todos={todos} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </React.Fragment>
  );
};

export default App;
