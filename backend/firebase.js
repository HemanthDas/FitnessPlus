import admin from "firebase-admin";
import { readFileSync } from "fs";
const serviceAccount = JSON.parse(
  readFileSync(
    "./fitnessplus-a5eea-firebase-adminsdk-asm8a-549f4f9ec0.json",
    "utf8"
  )
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fitnessplus-a5eea.firebaseio.com",
});

export default admin;
