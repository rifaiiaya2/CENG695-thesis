const Model = require('../model/item');
const fs = require('fs');


class Controller {

    // get all items
    // getAll(req, res, next) {
    //     Model.find((err, response) => {
    //         if (err) return next(err);
    //         res.status(200).send({ success: true, response });
    //     }).catch(err => res.status(400).send({ err }))
    // }

    getAll(req, res, next) {
        Model.find().then(response => res.status(200).json(response))
            .catch(error => { res.status(400).send(error) })
    }

      getItemsByCategoryId = (req, res, next) => {
    let { id } = req.params || {};
    Model.find({ category: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  };
      // get one category
      getbyID(req, res, next) {
        Model.findById(req.params.id ,(err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        })
    }

    // add item

    async post(req, res, next) {
        const reqFiles = [];
        const url = req.protocol + "://" + req.get("host");
        for (var i = 0; i < req.files.length; i++) {
          reqFiles.push(url + "/images/" + req.files[i].filename);
        }
        let newPost = await new Model({
          title: req.body.title,
          descirption: req.body.descirption,
          price: req.body.price,
          category: req.body.category,
          image: reqFiles,
        });
        newPost.save({}, (error, response) => {
          if (error) return next(error);
          res.status(200).send({ success: true, response });
        });
      }

    // Update item
    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Model.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }

    //delete a item
    delete(req, res, next) {
      let { id } = req.params;
      Model.findByIdAndDelete({ _id: id }, (err, response) => {
        if (err) return next(err);
        res.status(200).send({
          success: true,
          response,
        });
      });
    }


}
const controller = new Controller();
module.exports = controller;