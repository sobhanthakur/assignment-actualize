const express = require("express");
const router = express.Router();
const Model = require("../models/ChildPart");

// @route    POST api/upload
// @desc     Upload to DB
// @access   Public

router.post("/", async (req, res) => {
  try {
    // Save to DB (Commit)
    const options = { ordered: true };
    const result = await Model.insertMany(req.body, options);

    res.json({ Message: result.insertedCount + "Records inserted" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
  return res;
});

module.exports = router;
