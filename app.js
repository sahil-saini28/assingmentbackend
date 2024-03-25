import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Customer from "./models/customer.model.js";
import customerRoutes from "./routes/customer.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// handle all  Routes relates  to the customers
app.use("/api", customerRoutes);

app.post("/api/login", async (req, res) => {
  try {
    const { name, email } = req.body;
    // Check if a user with the provided name and email exists
    const user = await Customer.findOne({ name, email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // If user exists, return success message or user data as needed
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/user/plan", async (req, res) => {
  try {
    const { customerId } = req.body;
    const customer = await Customer.findById(customerId);
    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
