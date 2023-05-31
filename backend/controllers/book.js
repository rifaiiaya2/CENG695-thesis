const Model = require('../model/books');
const fs = require('fs');

class Controller {



    getAll(req, res, next) {
        Model.find().then(response => res.status(200).json(response))
            .catch(error => { res.status(400).send(error) })
    }

    // add book
    post(req, res, next) {
        let body = req.body;
        let doc = new Model(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }

        //delete a category
        delete(req, res, next) {
            Model.findOneAndDelete({ _id: req.params.id }, (err, response) => {
                if (err) return next(err);
                res.status(200).send({ success: true, response });
            })
        }
}
const controller = new Controller();
module.exports = controller;