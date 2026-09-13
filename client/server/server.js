
/**
 * ZARDOZI ROYALE - E-Commerce Backend Server
 * Description: Production-ready Express & MongoDB server with JWT Authentication, Auto-seeding & Order Management.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize Express App
const app = express();

// Middleware Configuration
app.use(express.json());
app.use(cors());

// Server & Database Configuration Constants
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://usamamalik1475_db_user:m1Eq1OvKKp2eRkQ8@cluster0.ir7zpie.mongodb.net/zardozi_store?retryWrites=true&w=majority';
const JWT_SECRET = process.env.JWT_SECRET || 'zardozi_royal_secret_key_9988';


// ==================== DATABASE MODELS ====================

// 1. User Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'customer' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// 2. Product Schema & Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// 3. Order Schema & Model
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: false },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  items: [
    {
      productId: { type: String },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);


// ==================== AUTHENTICATION ROUTES ====================

// 1. Register Route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'An account with this email already exists. Please sign in.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Account created successfully!',
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// 2. Login Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'No account found with this email. Please sign up first!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect password. Please try again.' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Logged in successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error during login' });
  }
});

// 3. Forgot Password Route
app.post('/api/auth/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ error: 'No account found with this email address' });
    }

    res.json({ message: 'Password reset instructions have been sent to your email.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error during password reset' });
  }
});

// 4. Reset Password Route
app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'No account found with this email address' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ 
      message: 'Password updated successfully!',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error during password reset' });
  }
});


// ==================== PRODUCT ROUTES ====================

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// ==================== ORDER ROUTES ====================

// 1. Create a New Order
app.post('/api/orders', async (req, res) => {
  try {
    const { userId, customerName, customerEmail, phone, address, items, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in the order.' });
    }

    const newOrder = new Order({
      userId: userId || null,
      customerName,
      customerEmail,
      phone,
      address,
      items,
      totalAmount,
      status: 'Pending'
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ 
      message: 'Order placed successfully and saved to database!', 
      orderId: savedOrder._id 
    });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Server error while placing order' });
  }
});

// 2. Get All Orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==================== DATABASE CONNECTION & SERVER START ====================

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected Successfully');

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany([
        {
          name: 'Royal Zardozi & Dabka Gold Lehenga',
          category: 'Bridal Lehenga',
          price: 185000,
          description: 'Handcrafted pure raw silk bridal lehenga embellished with traditional gold zardozi, dabka, and real stone work.',
          image: '/images/dress-1/1.jpg'
        },
        {
          name: 'Mughal Crimson Red Bridal Gharara',
          category: 'Bridal Gharara',
          price: 210000,
          description: 'Classic crimson red gharara set with thick naqshi borders, kora work, and heavily embroidered double dupatta.',
          image: '/images/dress-2/1.jpg'
        },
        {
          name: 'Emerald Green Velvet Pishwas',
          category: 'Velvet Pishwas',
          price: 195000,
          description: 'Royal emerald green pure velvet pishwas featuring intricate silver naqshi, tilla, and dabka flare details.',
          image: '/images/dress-3/1.jpg'
        },
        {
          name: 'Blush Pink Organza Bridal Maxi',
          category: 'Bridal Maxi',
          price: 165000,
          description: 'Ethereal blush pink organza maxi adorned with pearls, resham threads, and delicate zardozi motifs.',
          image: '/images/dress-4/1.jpg'
        },
        {
          name: 'Antique Gold Heavy Long Trail Pishwas',
          category: 'Long Trail Pishwas',
          price: 240000,
          description: 'Grand antique gold bridal pishwas with a majestic trailing back, heavy zardozi, and multi-faceted stone embellishments.',
          image: '/images/dress-5/1.jpg'
        },
        {
          name: 'Maroon Heritage Peacock Lehenga',
          category: 'Bridal Lehenga',
          price: 225000,
          description: 'Deep maroon silk lehenga featuring traditional peacock motif zardozi embroidery and heavy resham border work.',
          image: '/images/dress-6/1.jpg'
        },
        {
          name: 'Royal Emerald & Gold Bridal Sharara',
          category: 'Bridal Sharara',
          price: 190000,
          description: 'Exquisite emerald green net sharara paired with a heavily hand-embroidered short shirt featuring kora, dabka and pearls.',
          image: '/images/dress-7/1.jpg'
        },
        {
          name: 'Peach & Silver Crystal Peplum Set',
          category: 'Peplum & Lehenga',
          price: 175000,
          description: 'Modern peach raw silk peplum intricately adorned with metallic silver crystals, dabka, and sparkling sequin work.',
          image: '/images/dress-8/1.jpg'
        },
        {
          name: 'Burgundy Velvet Royal Sherwani & Bridal Jora',
          category: 'Velvet Couture',
          price: 230000,
          description: 'Deep burgundy pure velvet bridal outfit styled with heavy antique gold zardozi motifs and rich border detailing.',
          image: '/images/dress-9/1.jpg'
        },
        {
          name: 'Ivory & Gold Regal Farshi Lehenga',
          category: 'Farshi Lehenga',
          price: 250000,
          description: 'Majestic ivory net farshi lehenga featuring heavy traditional naqshi, zardozi and multi-colored resham accents.',
          image: '/images/dress-10/1.jpg'
        },
        {
          name: 'Ruby Red Traditional Bridal Sari',
          category: 'Bridal Sari',
          price: 160000,
          description: 'Pure organza ruby red sari featuring intricately worked pallu and borders with zardozi, kora, and Sitara embellishments.',
          image: '/images/dress-11/1.jpg'
        },
        {
          name: 'Champagne Gold Heavy Cutwork Angrakha',
          category: 'Bridal Angrakha',
          price: 215000,
          description: 'Sophisticated champagne gold net angrakha with heavy architectural cutwork borders, dabka, and pearl droplet finishing.',
          image: '/images/dress-12/1.jpg'
        }
      ]);
      console.log('🌱 All 12 Zardozi products seeded successfully into MongoDB!');
    }

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database connection error:', err.message);
  });