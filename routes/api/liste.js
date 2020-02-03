const liste = require("../../models/liste");
const express = require("express");
const router = express.Router();

//get
router.get("/", (req, res) => {
  liste
    .find()
    .then(liste => res.send(liste))
    .catch(err => console.log(err));
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  liste
    .findOneAndDelete({ _id: id })
    .then(liste => res.send(liste))
    .catch(err => console.log(err));
});
// update
router.put("/:id", (req, res) => {
  console.log("TCL: req.params.id", req.params.id);
  const { nom, prenom, telephone, email, role } = req.body;
  liste
    .findOneAndUpdate(
      { _id: req.params.id },
      { $set: { nom, telephone, email, prenom, role } }
    )
    .then(liste => res.send(liste))
    .catch(err => console.log(err));
});
// add
router.post("/", (req, res) => {
  const { nom, telephone, email, prenom, role } = req.body;
  const newliste = new liste({
    nom,
    prenom,
    telephone,
    email,
    role
  });
  newliste
    .save()
    .then(liste => res.send(liste))
    .catch(err => console.log(err));
});
module.exports = router;
