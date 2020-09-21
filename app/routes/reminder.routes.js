module.exports = app => {
    const reminder = require("../controllers/reminder.controller.js");
  
    // Create a new Customer
    app.post("/reminders", reminder.create);

    app.get("/reminders", reminder.getAll);
  
  };