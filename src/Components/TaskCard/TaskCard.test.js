

import TaskCard from "./TaskCard";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Initial testing", () => {
let sampleTodo={id:1}
  it('check the task and button initial state', () => {
    render(<TaskCard todo={sampleTodo}/>);
    const Task = screen.getByTestId("task");
    const button = screen.getByTestId("button")
    expect(Task).toHaveStyle('textDecoration: none')
    expect(button.textContent).toBe("Done");
  });
});

describe("done testing" ,()=>{
    let sampleTodo={id:1}
    // let todos =[{isDone:false}]
    let setTodos = jest.fn()
    it('check if form displays', () => {
        const {rerender} = render(<TaskCard todo={sampleTodo} todos={[{isDone:false}]} setTodos={setTodos}/>)
        const Task = screen.getByTestId("task");
        const button = screen.getByTestId("button")
        expect(Task).toHaveStyle('textDecoration: none')
        expect(button.textContent).toBe("Done");
        fireEvent.click(button, { target: { textContent: 'Completed' } });
        rerender(<TaskCard todo={sampleTodo} todos={[{isDone:true}]} setTodos={setTodos}/>)
        const buttonAfterClick = screen.getByTestId("button")
        expect(buttonAfterClick.textContent).toBe("Completed");
        // expect(Task).toHaveStyle('textDecoration: line-through')
      });
})

describe("done true testing" ,()=>{
    let sampleTodo={id:1, isDone:true}
    let todos =[{id:1, isDone:true}]
    let setTodos = jest.fn()
    it('check if form displays', () => {
        render(<TaskCard todo={sampleTodo} todos={todos} setTodos={setTodos}/>);
        const Task = screen.getByTestId("task");
        const button = screen.getByTestId("button")
        expect(Task).toHaveStyle('textDecoration: line-through')
        expect(button.textContent).toBe("Completed");
      });
})




 
