const Model = require("../model/rooms");
const fs = require("fs");

class Controller {
  getAll(req, res, next) {
    Model.find()
      .then((response) => res.status(200).json(response))
      .catch((error) => {
        res.status(400).send(error);
      });
  }
  // get one rooom
  getbyID(req, res, next) {
    Model.findById(req.params.id, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  // add room

  async post(req, res, next) {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/images/" + req.files[i].filename);
    }
    let newPost = await new Model({
      title: req.body.title,
      price: req.body.price,
      image: reqFiles,
    });
    newPost.save({}, (error, response) => {
      if (error) return next(error);
      res.status(200).send({ success: true, response });
    });
  }

  // Update room
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Model.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  }

  //delete a room
  delete(req, res, next) {
    Model.findOneAndDelete({ _id: req.params.id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
}
const controller = new Controller();
module.exports = controller;
