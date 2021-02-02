const sql = require("./db.js");

// constructor
const Message = function(message) {
  this.recipient_id = message.recipient_id;
  thi
  s.sender_id = message.sender_id;
  this.content = message.content;
  this.datetime = message.datetime;
};

Message.create = (newMessage, result) => {
  sql.query("INSERT INTO messages SET ?", newMessage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created message: ", { id: res.insertId, ...newMessage });
    result(null, { id: res.insertId, ...newMessage });
  });
};

Message.getAll = result => {
  sql.query("SELECT * FROM messages", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

module.exports = Message;