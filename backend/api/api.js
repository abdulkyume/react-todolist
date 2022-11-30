const express = require("express");
const app = express();
const apiRoute = express.Router();
// todoList model
let todoList = require("../models/todoList");

// Add User
apiRoute.route("/signup").post((req, res, next) => {
  todoList.find({ email: req.body.email }, (error, data) => {
    if (data.length > 0) {
      res.json("Email Already Exists, Sign In");
    } else {
      todoList.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    }
  });
});

// Log In
apiRoute.route("/login").post((req, res, next) => {
  todoList.find(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// addTodoList
apiRoute.route("/addTodoList").post((req, res, next) => {
  todoList.updateOne(
    { _id: req.body.id },
    { $push: { todoList: req.body.todolist } },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

// getTodoList
apiRoute.route("/getTodoList").post((req, res, next) => {
  todoList.find(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Delete TodoList
apiRoute.route("/delTodoList").post((req, res, next) => {
  todoList.updateOne(
    { _id: req.body.id },
    { $pull: { todoList: { _id: req.body.room_id } } },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

// update TodoList
apiRoute.route("/updateTodoList").post((req, res, next) => {
  todoList.updateOne(
    {
      todoList: { $elemMatch: { 'todoList._id': req.body.tdlist }}
    },
    { $set: { 'todoList.$.complete_status':req.body.cmp_status } },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data)
        res.json(data);
      }
    }
  );
});
module.exports = apiRoute;
