import express from "express";
import admin from "../firebase.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-profile", verifyToken, async (req, res) => {
  const uid = req.user.uid;
  const { name, age, gender, height, weight, fitnessGoal } = req.body;

  try {
    const db = admin.firestore();
    await db.collection("users").doc(uid).set({
      name,
      age,
      gender,
      height,
      weight,
      fitnessGoal,
    });
    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.get("/user-profile", verifyToken, async (req, res) => {
  const uid = req.user.uid;
  try {
    const db = admin.firestore();
    const userDoc = await db.collection("users").doc(uid).get();

    if (userDoc.exists) {
      res.status(200).json(userDoc.data());
    } else {
      res.status(404).json({ error: "User profile not found" });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
