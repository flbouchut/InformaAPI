module.exports = app => {
    const external_user = require("../controllers/external_user.controller.js");
  
    // Create a new Customer
    app.post("/external_users", external_user.create);

    app.get("/external_users", external_user.getAll);
  
  };