const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
    require("./fitnessplus-a5eea-firebase-adminsdk-asm8a-549f4f9ec0.json")
  ),
  databaseURL: "https://fitnessplus-a5eea.firebaseio.com",
});

module.exports = admin;
