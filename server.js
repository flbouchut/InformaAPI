const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bouchut application." });
});

require("./app/routes/external_user.routes.js")(app);
require("./app/routes/recipient.routes.js")(app);
require("./app/routes/reminder.routes.js")(app);
require("./app/routes/message.routes.js")(app);
require("./app/routes/view_message.routes.js")(app);


// set port, listen for requests
app.listen(3004, () => {
  console.log("Server is running on port 3004.");
});
