const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    childPartNumber: {
      type: String,
    },
    childPartDescription: {
      type: String,
    },
    itemReferenceNumber: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = ChildPart = mongoose.model("childPart", modelSchema);
