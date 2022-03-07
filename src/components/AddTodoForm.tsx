import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "../constants/ToDoTypes";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form data-testid="login-form">
      <p>Add Your Tasks!</p>
      <input className="form-input" type="text" value={newTodo} onChange={handleChange} />
      <button className="submitbtn" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
