const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const initialProducts = [
  {
    name: "Zari Velvet Royal Lehnga",
    category: "Bridal Wear",
    price: 285000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    description: "Deep maroon velvet lehenga adorned with pure zardozi, dabka, and Swarovski crystals.",
  },
  {
    name: "Champagne Gold Walima Maxi",
    category: "Walima Wear",
    price: 220000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    description: "Pastel champagne organza maxi with silver zardozi and pearl embroidery.",
  },
  {
    name: "Mustard Silk Mehndi Angrakha",
    category: "Mayun & Mehndi",
    price: 135000,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    description: "Traditional raw silk angrakha with gold gotta patti and resham work.",
  },
  {
    name: "Crimson Heavy Formal Pishwas",
    category: "Heavy Formals",
    price: 165000,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    description: "Crimson red silk pishwas featuring intricate hand embroidery and heavy dupatta.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/royal_bridal_db")
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(initialProducts);
    console.log("Database seeded with default Bridal collection!");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
