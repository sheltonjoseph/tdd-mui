import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import Button from "@mui/material/Button";

const TaskCard = ({ todo, setTodos, todos }) => {
  const handleClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Card sx={{ minWidth: 275, m: 5 }} data-testid="card">
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       
          <Typography sx={{ fontSize: 14 , textDecoration: todo.isDone? "line-through" : "none" }} color="text.secondary" gutterBottom data-testid="task">
            {todo.todo}
          </Typography>
        

        <Button variant="contained" onClick={() => handleClick(todo.id)} data-testid="button">
          {todo.isDone ? "Completed" : "Done"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
