const Fournisseur = require("../models/Fournisseurs");
const express = require("express");
const router = express.Router();

//get fournisseur
router.get("/", (req, res) => {
  Fournisseur.find()
    .then(fournisseurs => res.send(fournisseurs))
    .catch(err => console.log(err));
});

//delete fournisseur
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Fournisseur.findOneAndDelete({ _id: id })
    .then(fournisseurs => res.send(fournisseurs))
    .catch(err => console.log(err));
});
// update fournisseur
router.put("/:id", (req, res) => {
  console.log("TCL: req.params.id", req.params.id);
  const { nomFournisseur, emailFournisseur, telephoneFournisseur } = req.body;
  Fournisseur.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nomFournisseur, emailFournisseur, telephoneFournisseur } }
  )

    .then(fournisseurs => res.send(fournisseurs))
    .catch(err => console.log(err));
});
// add fournisseur
router.post("/", (req, res) => {
  const { nomFournisseur, emailFournisseur, telephoneFournisseur } = req.body;
  const newfournisseur = new fournisseur({
    nomFournisseur,
    emailFournisseur,
    telephoneFournisseur
  });
  newfournisseur
    .save()
    .then(fournisseurs => res.send(fournisseurs))
    .catch(err => console.log(err));
});
module.exports = router;
