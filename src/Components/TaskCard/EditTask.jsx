import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";

const EditTask = ({ anchorEl, setAnchorEl, todo }) => {
  const open = Boolean(anchorEl);

  const [description, setDescription] = useState(todo.description);
  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     setAnchorEl(null);
  //   };

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setAnchorEl(null);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Popover
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      BackdropProps={{ invisible: false }}
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" justifyContent="center">
            EDIT
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            id={todo.todo_id}
            label="Task Name"
            defaultValue={description}
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
        </ListItem>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          <Button variant="contained" onClick={updateDescription}>
            Done
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

export default EditTask;
