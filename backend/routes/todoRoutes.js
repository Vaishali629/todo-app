const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
});

// ADD new todo
router.post("/", async (req, res) => {
  try {
    const { name, dueDate } = req.body;

    if (!name || !dueDate) {
      return res.status(400).json({
        message: "Name and due date are required",
      });
    }

    const todo = await Todo.create({
      name,
      dueDate,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to add todo",
    });
  }
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
});

module.exports = router;