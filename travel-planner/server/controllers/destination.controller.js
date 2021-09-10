const Destination = require("../models/destination.model");

// Export an object that is full of methods.
module.exports = {
  // long-form syntax - key: value
  create: function (req, res) {
    console.log("create method executed");

    // req.body is the form data or data sent in from postman / js requests.
    Destination.create(req.body)
      .then((destination) => {
        // newly created dest from DB with auto generated id and createdAt.
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Shorthand method in object syntax.
  getAll(req, res) {
    console.log("getAll method executed");
    Destination.find()
      .then((destinations) => {
        res.json(destinations);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    Destination.findById(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Destination.findByIdAndDelete(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Destination.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true, // Run model validations again.
      new: true, // return newly updated document.
    })
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // NOT ON EXAM.
  createMany(req, res) {
    const promises = req.body.map((dest) => {
      return Destination.create(dest);
    });

    Promise.allSettled(promises).then((results) => {
      res.json(results);
    });
  },
};
