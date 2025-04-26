const jwt = require("jsonwebtoken");

const AuthenticateToken = (req, res, next) => {
  const SECERT_KEY = process.env.JWT_SECRET_KEY;

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No Token Provided." });
  }
  try {
    const decode = jwt.verify(token, SECERT_KEY);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or Expired Token." });
  }
};

module.exports = { AuthenticateToken };
