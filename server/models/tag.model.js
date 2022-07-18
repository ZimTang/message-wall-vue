const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: String,
});

const TagModel = mongoose.model("tag", tagSchema);

module.exports = TagModel;
