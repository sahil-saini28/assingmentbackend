import mongoose from "mongoose";


const customerSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: {
    type: String,
    unique: true,
  },
  adharNumber: {
    type: String,
    unique: true,
    minlength: 12,
    maxlength: 12,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  assignedMobileNumber: {
    type: String,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  plan: {
    name: String,
    cost: Number,
    validity: Number,
    status: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;