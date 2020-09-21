const Recipient = require("../models/recipient.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const recipient = new Recipient({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        city: req.body.city,
        birthday_date: req.body.birthday_date
    });

    // Save Customer in the database
    Recipient.create(recipient, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};



exports.getAll = (req, res) => {
    Recipient.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};