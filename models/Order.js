const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, default: "Not Specified" },
    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        selectedSize: { type: String, default: "Standard" },
        customMeasurements: {
          chest: { type: String },
          waist: { type: String },
          hips: { type: String },
          length: { type: String },
        },
      },
    ],
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: "PKR" },
    orderStatus: {
      type: String,
      enum: ["Pending", "In Handcrafting", "Dispatched", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
