
const cors = require('cors');
const express = require('express');
const pool = require('./db');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
// routes


//  create a todo

app.post("/todos", async (req, res) => {
  try {

    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
    res.json(newTodo.rows[0]);

  } catch (error) {
    console.error(error.message);
  }
})



//  get all  todos

app.get("/todos", async (req, res) => {
  try {
    const alltodos = await pool.query("SELECT * FROM todo");
    res.json(alltodos.rows);


  } catch (error) {
    console.error(error.message);

  }
})


//  get a todo


app.get("/todos/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);

  } catch (error) {
    console.error(error.message);

  }
})


//  update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { newDescription } = req.body
    const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *", [newDescription , id])
    res.json('todo updated');

  } catch (error) {
    console.error(error.message);

  }
})


//  delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id]);
    res.json("todo deleted");

  } catch (error) {
    console.error(error.message);

  }
})

app.put("/todos/:id/complete", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await pool.query("UPDATE todo SET checked = TRUE WHERE todo_id = $1 RETURNING *", [id]);
    res.json(updatedTodo.rows[0]);

  } catch (error) {
    console.error(error.message);

  }
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

