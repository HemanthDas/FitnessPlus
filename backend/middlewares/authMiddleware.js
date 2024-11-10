import admin from "../firebase.js";

const verifyToken = async (req, res, next) => {
  let idToken = req.headers.authorization;
  if (idToken && idToken.startsWith("Bearer ")) {
    idToken = idToken.split("Bearer ")[1];
  }
  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    
    next();
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default verifyToken;