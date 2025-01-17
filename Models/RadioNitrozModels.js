const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gopeshwarkumark:gopeshwar23ce8004@cluster0.pecwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/RN").then(() => {
  console.log("databse connected successfull y:")
}).catch((e) => {
  console.log(e);
})

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