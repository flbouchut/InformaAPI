module.exports = app => {
    const view_message = require("../controllers/view_message.controller.js");
  
    // Create a new Customer
    app.post("/view_messages", view_message.create);

    app.get("/view_messages", view_message.getAll);
  
  };