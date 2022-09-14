import React, { useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Typography from "@mui/material/Typography";
import "./Home.css";
import TaskCard from "../Components/TaskCard/TaskCard";

const Home = () => {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [isGetTodos, setIsGetTodos] = useState(true);

  const getTodos = async () => {
    try {
      const getResponse = await fetch("http://localhost:5000/todos");
      const jsonData = await getResponse.json();
      setTodos(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (isGetTodos) {
      getTodos();
      setIsGetTodos(false);
    }
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setIsGetTodos(true);
      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
      setIsGetTodos(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="App">
      <Typography
        sx={{
          fontSize: "40px",
          margin: "30px 0px",
          color: "white",
          zIndex: 1,
          textAlign: "center",
          //   fontFamily: "Neucha" "cursive"
        }}
        data-testid="heading"
      >
        TASKIFY
      </Typography>
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter The task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          data-testid="nameInput"
          inputProps={{ "data-testid": "textInput" }}
        />
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
          }}
          disabled={!description}
          endIcon={<AddTaskIcon />}
          onClick={onSubmitForm}
          data-testid="button"
        />
      </div>
      {todos.map((todo, index) => (
        <div className="todos" data-testid="container">
          <TaskCard
            index={index}
            setIsGetTodos={setIsGetTodos}
            todo={todo}
            key={todo.todo_id}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
