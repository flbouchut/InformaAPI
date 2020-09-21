const sql = require("./db.js");

// constructor
const Recipient = function(recipient) {
  this.last_name = recipient.last_name;
  this.first_name = recipient.first_name;
  this.city = recipient.city;
  this.birthday_date = recipient.birthday_date;
};

Recipient.create = (newRecipient, result) => {
  sql.query("INSERT INTO recipients SET ?", newRecipient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created recipient: ", { id: res.insertId, ...newRecipient });
    result(null, { id: res.insertId, ...newRecipient });
  });
};

Recipient.getAll = result => {
  sql.query("SELECT * FROM recipients", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("recipients: ", res);
    result(null, res);
  });
};

module.exports = Recipient;