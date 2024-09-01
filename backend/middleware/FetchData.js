const jwt = require("jsonwebtoken");
const JWT_SECRET = "WelcomeToMyWebsite@NoteME";

const fetchUserData = (req, res, next) => {
  const token = req.header('auth-token');
  
  if (!token) {
    return res.status(401).send({ error: "Please authenticate with a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // Set the user data in the request
    next();
  } catch (error) {
    console.error("Token verification error:", error.message); // Debugging log
    return res.status(401).send({ error: "Please authenticate with a valid token" });
  }
};

module.exports = fetchUserData;
