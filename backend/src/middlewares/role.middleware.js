const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/login"); // User not logged in
    }

    if (req.session.user.role !== role) { // User does not have the required role
      return res.status(403).send("Access Denied"); // Forbidden
    }

    next(); // User has the required role, proceed to the next middleware/route handler
  };
};

module.exports = requireRole;
