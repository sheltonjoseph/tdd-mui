import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React,{useState} from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditTask from "./EditTask";


const TaskCard = ({ todo, setTodos, todos , setIsGetTodos , deleteTodo }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDoneClick = async (id) => {
    try{
      const body = { isdone : !todo.isdone };
      const response = await fetch(`http://localhost:5000/todos/${id}`,{
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        setIsGetTodos(true)
    }catch (err) {
      console.error(err.message);
    }
  };

  // delete function
  console.log(todo)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            textDecoration: todo.isdone ? "line-through" : "none",
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
          sx={{ml:2}}
        >
          <Button onClick={() => handleDoneClick(todo.todo_id)} >done</Button>
          {/* <Button onClick={handleClick} >Edit</Button> */}
          <Button onClick={() => deleteTodo(todo.todo_id)}>Delete</Button>
        </ButtonGroup>
      </CardContent>
      <EditTask anchorEl={anchorEl} setAnchorEl={setAnchorEl} todo={todo} />
    </Card>
  );
};

export default TaskCard;
