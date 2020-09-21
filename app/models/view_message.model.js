const sql = require("./db.js");

// constructor
const View_Message = function(view_message) {
  this.message_id = reminder.message_id;
  this.isRead = reminder.isRead;
  this.view_datetime = reminder.view_datetime;
};

View_Message.create = (newView_Message, result) => {
  sql.query("INSERT INTO view_messages SET ?", newView_Message, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created message: ", { id: res.insertId, ...newView_Message });
    result(null, { id: res.insertId, ...newView_Message });
  });
};

View_Message.getAll = result => {
  sql.query("SELECT * FROM view_messages", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

module.exports = View_Message;