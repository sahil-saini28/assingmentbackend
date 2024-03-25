import Customer from "../models/customer.model.js";
import express from "express";
const router = express.Router();

router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/customers/register", async (req, res) => {
  try {
    const { name, dob, email, adharNumber, assignedMobileNumber, plan } =
      req.body;
    const newCustomer = new Customer({
      name,
      dob,
      email,
      adharNumber,
      assignedMobileNumber,
      plan,
    });
    const savedCustomer = await newCustomer.save();
    const success = true;
    res.status(201).json({ customer: savedCustomer, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/customers/change-plan", async (req, res) => {
  try {
    const { customerId, newPlan } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { plan: newPlan },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
