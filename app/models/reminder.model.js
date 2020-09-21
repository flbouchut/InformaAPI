const sql = require("./db.js");

// constructor
const Reminder = function(reminder) {
  this.recipient_id = reminder.recipient_id;
  this.category = reminder.category;
  this.content = reminder.content;
  this.datetime = reminder.datetime;
  this.isOver = reminder.isOver;
};

Reminder.create = (newReminder, result) => {
  sql.query("INSERT INTO reminders SET ?", newReminder, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created reminder: ", { id: res.insertId, ...newReminder });
    result(null, { id: res.insertId, ...newReminder });
  });
};

Reminder.getAll = result => {
  sql.query("SELECT * FROM reminders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("reminders: ", res);
    result(null, res);
  });
};

module.exports = Reminder;