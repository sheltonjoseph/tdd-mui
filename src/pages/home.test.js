import Home from "./Home";
import TodoList from "../Components/TaskList/TaskList";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("text checking", () => {
  it('check if form displays', () => {
    render(<Home/>);
    const heading = screen.getByTestId("heading");
    expect(heading.textContent).toBe("TASKIFY");
  });
});

describe("Button and input checking", () => {
  it('check the initial state', () => {
    render(<Home/>);
    const Button = screen.getByTestId("button");
    const textInput = screen.getByTestId("textInput");
    expect(textInput.value).toBe('');
    expect(Button).toHaveClass("Mui-disabled");
  });
  it('check the done state', () => {
    render(<Home/>);
    const Button = screen.getByTestId("button");
    const textInput = screen.getByTestId("textInput");
    expect(textInput.value).toBe('');
    expect(Button).toHaveClass("Mui-disabled");
    fireEvent.change(textInput, { target: { value: 'Sama' } });
    expect(Button).not.toHaveClass("Mui-disabled");
  });
});



describe("TaskCard length",()=>{
  let todos=[{id:1,
    isDone: false}]
  it("check the intial list",()=>{
    render(<TodoList todos={todos}/>)
    const card = screen.getByTestId("card");
    expect((card)).toBeInTheDocument();
  })
})
 
