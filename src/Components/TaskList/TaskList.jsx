import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const TodoList = ({ todos, setTodos }) => {

  return (
    <div className="todos" data-testid="container">
      {todos.map((todo, index) => (
        <TaskCard
          index={index}
          // todos={todos}
          todo={todo}
          key={todo.todo_id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
