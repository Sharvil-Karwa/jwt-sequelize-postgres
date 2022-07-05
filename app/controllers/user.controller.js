exports.all = (req, res) => {
  res.status(200).send("Visible to all");
};
exports.user = (req, res) => {
  res.status(200).send("Visible to users.");
};
exports.admin = (req, res) => {
  res.status(200).send("Visible to admins only.");
};
