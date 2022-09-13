import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React,{useState} from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditTask from "./EditTask";


const TaskCard = ({ todo, setTodos, todos }) => {
  // const handleClick = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  //     )
  //   );
  // };

  // delete function
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.log(err.message);
    }
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
        <Typography
          sx={{
            fontSize: 14,
            textDecoration: todo.isDone ? "line-through" : "none",
          }}
          color="text.secondary"
          gutterBottom
          data-testid="task"
        >
          {todo.description}
        </Typography>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClick} >Edit</Button>
          <Button onClick={() => deleteTodo(todo.todo_id)}>Delete</Button>
        </ButtonGroup>
      </CardContent>
      <EditTask anchorEl={anchorEl} setAnchorEl={setAnchorEl} todo={todo} />
    </Card>
  );
};

export default TaskCard;
