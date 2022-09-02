import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Typography from "@mui/material/Typography";
import "./Home.css";
import TodoList from "../Components/TaskList/TaskList";





const Home = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const handleAdd = () => {
        // e.preventDefault();
      
          setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
          setTodo("");
        
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
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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
          disabled={!todo}
          endIcon={<AddTaskIcon />}
          onClick={handleAdd}
          data-testid="button"
        />
      </div>
      <TodoList todos={todos}  setTodos={setTodos}/>
    </div>
  );
};

export default Home;
