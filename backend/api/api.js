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

// Get All Employees
apiRoute.route("/").get((req, res, next) => {
  todoList.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get single employee
apiRoute.route("/read/:id").get((req, res, next) => {
  todoList.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update employee
apiRoute.route("/update/:id").put((req, res, next) => {
  todoList.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});
// Delete employee
apiRoute.route("/delete/:id").delete((req, res, next) => {
  todoList.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = apiRoute;
