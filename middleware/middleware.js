const jwt = require("jsonwebtoken");
const users = require("../models/Student.js");
//  Middlewares
const verifyJWT = (req, res, next) => {
  const authorized = req.headers.authorization;
  if (!authorized) {
    return res.status(401).json({ error: true, message: "Auth Error" });
  }
  const token = authorized.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ error: true, message: "Token is not valid" });
    }
    req.decoded = decoded;
    next();
  });
};
const verifyUser = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await users.findOne({ email: email });
  if (user && user.email === req.query.email) {
    next();
  } else {
    res
      .status(403)
      .json({ error: true, message: "Why you need another's personal data?" });
  }
};
const requireRole = async (role) => {
  return async (req, res, next) => {
    const email = req.decoded.email;
    const user = await users.findOne({ email: email });
    if (user && role.includes(user.role)) {
      next();
    } else {
      res.status(403).json({ error: true, message: "Unauthorized" });
    }
  };
};
const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await users.findOne({ email: email });

  if (user.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: true, message: "Unauthorized" });
  }
};

module.exports = {
  verifyJWT,
  verifyAdmin,
  verifyUser,
  requireRole,
};
