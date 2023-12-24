const { getUserWithId } = require("../services/auth");

const enforceLoggedIn = (req, res, next) => {
  const uid = req.cookies?.uid;
  if (!uid) return res.redirect("/login");

  const user = getUserWithId(uid);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
};

module.exports = {
  enforceLoggedIn,
};
