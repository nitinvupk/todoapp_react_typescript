export type Todo = {
  text: string;
  complete: boolean;
};

export type AddTodo = (newTodo: string) => void;

export type ToggleCompleteTask = (selectedTodo: Todo) => void;

export type DeleteTask = (selectedTodo: Todo, e: FormEvent<HTMLButtonElement>) => void;