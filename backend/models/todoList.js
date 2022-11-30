const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let users = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  todoList: [
    {
      title: { type: String },
      description: { type: String },
      time: { type: Date },
      complete_status: { type: Boolean },
    }
  ],
});

module.exports = mongoose.model('todolistusers', users)