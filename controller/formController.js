'use strict';

const Form = require('./../model/formModel');

const formController = {

  createForm(req, res) {
    let form = new Form({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      pay: req.body.pay,
    })
    form.save(function(err, doc) {
      if (err) {
        res.sendStatus(200)
      } else {
        res.send(doc);
      }
    })
  },

}

module.exports = formController;