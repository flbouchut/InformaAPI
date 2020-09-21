const Reminder = require("../models/reminder.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const reminder = new Reminder({
        recipient_id: req.body.recipient_id,
        category: req.body.category,
        content: req.body.content,
        datetime: req.body.datetime,
        isOver: req.body.isOver,
    });

    // Save Customer in the database
    Reminder.create(reminder, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};



exports.getAll = (req, res) => {
    Reminder.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};