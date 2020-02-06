const Client = require("../models/clients");
const express = require("express");
const router = express.Router();

//get client
router.get("/", (req, res) => {
  Stock.find()
    .then(clients => res.send(clients))
    .catch(err => console.log(err));
});

//delete client
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Stock.findOneAndDelete({ _id: id })
    .then(clients => res.send(clients))
    .catch(err => console.log(err));
});
// update client
router.put("/:id", (req, res) => {
  console.log("TCL: req.params.id", req.params.id);
  const { nomClient, prenomClient, emailClient, telephoneClient } = req.body;
  Stock.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nomClient, prenomClient, emailClient, telephoneClient } }
  )

    .then(clients => res.send(clients))
    .catch(err => console.log(err));
});
// add client
router.post("/", (req, res) => {
  const { nomClient, prenomClient, emailClient, telephoneClient } = req.body;
  const newclient = new Client({
    nomClient,
    prenomClient,
    emailClient,
    telephoneClient
  });
  newclient
    .save()
    .then(clients => res.send(clients))
    .catch(err => console.log(err));
});
module.exports = router;
