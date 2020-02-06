const Produit = require("../models/produits");
const express = require("express");
const router = express.Router();

//get produit
router.get("/", (req, res) => {
  Produit.find()
    .then(produits => res.send(produits))
    .catch(err => console.log(err));
});

//delete produit
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Produit.findOneAndDelete({ _id: id })
    .then(produits => res.send(produits))
    .catch(err => console.log(err));
});
// update produit
router.put("/:id", (req, res) => {
  console.log("TCL: req.params.id", req.params.id);
  const { reference, nomProduit, prixAchat, prixVente, poids } = req.body;
  Produit.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { reference, nomProduit, prixAchat, prixVente, poids } }
  )
    .then(produits => res.send(produits))
    .catch(err => console.log(err));
});

// add produit
router.post("/", (req, res) => {
  const { reference, nomProduit, prixAchat, prixVente, poids } = req.body;
  const newproduit = new Produit({
    reference,
    nomProduit,
    prixAchat,
    prixVente,
    poids
  });
  newproduit
    .save()
    .then(produits => res.send(produits))
    .catch(err => console.log(err));
});
module.exports = router;
