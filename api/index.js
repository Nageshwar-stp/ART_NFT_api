const express = require("express");
const app = express();
const port = 3000;

const nftData = {
  0: {
    description:
      "Highly Passionate Ant that enjoys being carried around by his friends.",
    external_url: "https://polygonscan.com/",
    image: "ipfs://bafkreicxne3z6ryszbdhlauv3sypjhf44zpxnauspx2tryqn3uo2ahusoe",
    name: "Ant Master",
  },
  1: {
    description:
      "Smart and very friendly Ant that do his job well and is always ready to help.",
    external_url: "https://polygonscan.com/",
    image: "ipfs://bafkreihl7jte6pxehlzoj767x3uvzriekdlflm4lh4x2ibachumkhmzleu",
    name: "Clerk Ant Brok",
  },
};

app.get("/", (req, res) => {
  res.send("ART NFT Collection");
});

app.get("/api", (req, res) => {
  res.send(nftData);
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  res.send(nftData[id]);
});

module.exports = app;
