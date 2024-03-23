import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(express.json());




// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('MongoDB connection error:', error));




// Define Customer schema and model
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
  }
});

const Customer = mongoose.model('Customer', customerSchema);  






app.post('/api/customers/register', async (req, res)  => {
  try {
    const { name, dob, email, adharNumber, assignedMobileNumber, plan } = req.body;
    const newCustomer = new Customer({
      name,
      dob,
      email,
      adharNumber,
      assignedMobileNumber,
      plan,
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});






app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
