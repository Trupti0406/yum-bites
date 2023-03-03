const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "y9vOy1K2FkewOuB37zEcCnlw5IEt2JyP"
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }),
    body("password", "Password must be 5 or more characters").isLength({
      min: 5,
    }),
    body("email").isEmail(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// Login Route
router.post(
  "/loginuser",
  [
    body("password", "Password must be 5 or more characters").isLength({
      min: 5,
    }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const psdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!psdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
        }
        
        const data = {
            user: {
                id:userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
