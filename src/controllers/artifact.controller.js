const Artifact = require("../models/artifact.model");

// Create artifact
exports.createArtifact = async (req, res) => {
  const artifact = await Artifact.create({
    ...req.body,
    createdBy: req.user.id,
  });

  res.json(artifact);
};

// Get all artifacts
exports.getArtifacts = async (req, res) => {
  const artifacts = await Artifact.find()
    .populate("createdBy", "email");

  res.json(artifacts);
};
