module.exports = app => {
    const recipient = require("../controllers/recipient.controller.js");
  
    // Create a new Customer
    app.post("/recipients", recipient.create);

    app.get("/recipients", recipient.getAll);
  
  };