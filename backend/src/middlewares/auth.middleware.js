const requireAuth = (req, res, next) => {
  if (!req.session.user) { // User not logged in
    return res.redirect("/login");
  }

  next(); // User is authenticated, proceed to the next middleware/route handler
};

module.exports = requireAuth;
