const View_Message = require("../models/view_message.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const view_message = new View_Message({
        message_id: req.body.message_id,
        isRead: req.body.isRead,
        view_datetime: req.body.view_datetime
    });

    // Save Customer in the database
    View_Message.create(view_message, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};



exports.getAll = (req, res) => {
    View_Message.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};