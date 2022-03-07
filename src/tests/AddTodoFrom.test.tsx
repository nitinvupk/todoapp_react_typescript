import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { AddTodoForm } from '../components/AddTodoForm';


beforeAll(() => {
  jest.setTimeout(10000)
  jest.resetModules()
})
test('renders learn react link', (AddTodo) => {
  const { getByText } = render(<AddTodoForm addTodo={AddTodo} />);
  expect(getByText(/Add Your Tasks!/i)).toBeTruthy();
});
