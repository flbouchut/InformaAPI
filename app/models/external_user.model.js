const sql = require("./db.js");

// constructor
const External_User = function(external_user) {
  this.name = external_user.name;
  this.city = external_user.city;
};

External_User.create = (newExternal_User, result) => {
  sql.query("INSERT INTO external_users SET ?", newExternal_User, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newExternal_User });
    result(null, { id: res.insertId, ...newExternal_User });
  });
};

External_User.getAll = result => {
  sql.query("SELECT * FROM external_users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("user: ", res);
    result(null, res);
  });
};

module.exports = External_User;