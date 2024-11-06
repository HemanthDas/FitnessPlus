const express = require("express");
const admin = require("../firebase");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-profile", verifyToken, async (req, res) => {
  const uid = req.user.uid;
  const { name, age, fitnessGoal, workoutPlan, dietPreference } = req.body;

  try {
    const db = admin.firestore();
    await db.collection("users").doc(uid).set({
      name,
      age,
      fitnessGoal,
      workoutPlan,
      dietPreference,
    });
    res.status(200).send("User profile created successfully!");
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).send("Error creating user profile");
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
      res.status(404).send("User profile not found");
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).send("Error fetching user profile");
  }
});

module.exports = router;
