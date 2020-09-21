const Message = require("../models/message.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const message = new Message({
        recipient_id: req.body.recipient_id,
        sender_id: req.body.sender_id,
        content: req.body.content,
        datetime: req.body.datetime
    });

    // Save Customer in the database
    Message.create(message, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};



exports.getAll = (req, res) => {
    Message.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};