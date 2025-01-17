const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/RNAuditionBase");

const schema = new mongoose.Schema({
  first: { type: String},   // First Name
  middle: { type: String},  // Middle Name
  last: { type: String,},    // Last Name
  Registration: { type: String}, // Registration No.
  roll: { type: String},         // Roll No.
  year: { type: Number},        // Year
  mobile: { type: Number},        // Mobile No.
  email: { type: String},        // Email
  message: { type: String},      // Message
  clubPreference: { type: String}, // Club Preference
  webdev: { type: String}, // domain
  RateCreativity: { type: String}, // rateing
  RateManagement: { type: String}, // rateing
  RateHardworking: { type: String}, // rateing
  Ratesense: { type: String}, // rateing
});

module.exports = mongoose.model("RadioNitrozModels", schema);