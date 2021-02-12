const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: String,
  link: String,
  desc: String
});

const Link = mongoose.model("Link", linkSchema);

exports.CreateLink = (nameIN, linkIN, descIN) => {
  let tmp = new Link({
    name: nameIN,
    link: linkIN,
    desc: descIN
  });
  return tmp;
};

module.exports = Link;
