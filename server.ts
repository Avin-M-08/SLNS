import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Database from "better-sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("data.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    category_id INTEGER,
    description TEXT,
    uses TEXT,
    suitable_crops TEXT,
    image_url TEXT,
    stock_status TEXT,
    FOREIGN KEY(category_id) REFERENCES categories(id)
  );

  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_en TEXT,
    title_kn TEXT,
    content_en TEXT,
    content_kn TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    message TEXT,
    product_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    role TEXT,
    content TEXT,
    rating INTEGER
  );

  CREATE TABLE IF NOT EXISTS crop_recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_name TEXT,
    season TEXT,
    fertilizers TEXT,
    seeds TEXT,
    tips TEXT
  );
`);

// Seed Admin if not exists
const adminCount = db.prepare("SELECT count(*) as count FROM admin_users").get() as { count: number };
if (adminCount.count === 0) {
  const hashedPassword = bcrypt.hashSync("admin123", 10);
  db.prepare("INSERT INTO admin_users (username, password) VALUES (?, ?)").run("admin", hashedPassword);
}

// Seed Categories if not exists
const categoryCount = db.prepare("SELECT count(*) as count FROM categories").get() as { count: number };
if (categoryCount.count === 0) {
  const insertCategory = db.prepare("INSERT INTO categories (name, description) VALUES (?, ?)");
  insertCategory.run("Fertilizers", "High quality chemical and organic fertilizers");
  insertCategory.run("Seeds", "Certified high-yield seeds for all seasons");
  insertCategory.run("Pesticides", "Crop protection and pest management solutions");
  insertCategory.run("Organic", "Natural and environment friendly soil enhancers");
}

// Seed Products if not exists
const productCount = db.prepare("SELECT count(*) as count FROM products").get() as { count: number };
if (productCount.count === 0) {
  const insertProduct = db.prepare("INSERT INTO products (name, brand, category_id, description, uses, suitable_crops, image_url, stock_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  
  insertProduct.run(
    "Jai Kishan Urea", 
    "Jai Kishan", 
    1, 
    "High nitrogen fertilizer for rapid plant growth.", 
    "Basal and top dressing", 
    "Rice, Maize, Sugarcane", 
    "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800", 
    "In Stock"
  );
  
  insertProduct.run(
    "Mangala DAP", 
    "Mangala", 
    1, 
    "Rich source of phosphorus for root development.", 
    "Pre-sowing application", 
    "Cotton, Groundnut, Pulses", 
    "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800", 
    "In Stock"
  );

  insertProduct.run(
     "Kaveri 7299 Corn",
     "Kaveri Seeds",
     2,
     "High yield hybrid corn seeds with drought resistance.",
     "Kharif and Rabi sowing",
     "Maize",
     "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
     "In Stock"
  );

  insertProduct.run(
     "Growmore 10:26:26",
     "Coromandel",
     1,
     "Complex fertilizer for balanced nutrition.",
     "All stages of growth",
     "Tomato, Chili, Onion",
     "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&q=80&w=800",
     "In Stock"
  );
}

// Seed Blogs
const blogCount = db.prepare("SELECT count(*) as count FROM blogs").get() as { count: number };
if (blogCount.count === 0) {
    const insertBlog = db.prepare("INSERT INTO blogs (title_en, title_kn, content_en, content_kn, image_url) VALUES (?, ?, ?, ?, ?)");
    insertBlog.run(
        "Modern Rice Farming Tips",
        "ಆಧುನಿಕ ಭತ್ತದ ಕೃಷಿ ಸಲಹೆಗಳು",
        "Proper fertilizer application can increase rice yield by 30%. Use Urea in three split doses.",
        "ಸರಿಯಾದ ರಸಗೊಬ್ಬರ ಬಳಕೆಯಿಂದ ಭತ್ತದ ಇಳುವರಿಯನ್ನು 30% ಹೆಚ್ಚಿಸಬಹುದು. ಯೂರಿಯಾವನ್ನು ಮೂರು ಹಂತಗಳಲ್ಲಿ ಬಳಸಿ.",
        "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=800"
    );
    insertBlog.run(
        "Organic Soil Management",
        "ಸಾವಯವ ಮಣ್ಣಿನ ನಿರ್ವಹಣೆ",
        "Using compost and green manure helps maintain long-term soil health.",
        "ಕಂಪೋಸ್ಟ್ ಮತ್ತು ಹಸಿರು ಗೊಬ್ಬರವನ್ನು ಬಳಸುವುದರಿಂದ ಮಣ್ಣಿನ ದೀರ್ಘಕಾಲದ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಬಹುದು.",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800"
    );
}

// Seed Testimonials
const testimonialCount = db.prepare("SELECT count(*) as count FROM testimonials").get() as { count: number };
if (testimonialCount.count === 0) {
    const insertTestimonial = db.prepare("INSERT INTO testimonials (name, role, content, rating) VALUES (?, ?, ?, ?)");
    insertTestimonial.run("Siddappa K", "Paddy Farmer", "I have been buying seeds from SLNS for 20 years. Their advice on fertilizer dosage saved my crop last year.", 5);
    insertTestimonial.run("Mallikarjuna", "Maize Grower", "Excellent quality hybrid seeds. Best yield I've ever had in Challakere region.", 5);
}

// Seed Crop Recommendations
const cropRecCount = db.prepare("SELECT count(*) as count FROM crop_recommendations").get() as { count: number };
if (cropRecCount.count === 0) {
    const insertRec = db.prepare("INSERT INTO crop_recommendations (crop_name, season, fertilizers, seeds, tips) VALUES (?, ?, ?, ?, ?)");
    insertRec.run("Paddy", "Kharif", "Urea, DAP, MOP", "Kaveri 468", "Keep standing water till grain filling stage.");
    insertRec.run("Maize", "Rabi", "10:26:26, Urea", "Jindal Hybrid", "Avoid moisture stress during silking stage.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const JWT_SECRET = process.env.JWT_SECRET || "agri-secret-key";

  app.use(express.json());

  // API Routes
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = db.prepare("SELECT * FROM admin_users WHERE username = ?").get(username) as any;
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "24h" });
      res.json({ token, username: user.username });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  // Category Routes
  app.get("/api/categories", (req, res) => {
    const categories = db.prepare("SELECT * FROM categories").all();
    res.json(categories);
  });

  // Product Routes
  app.get("/api/products", (req, res) => {
    const { category, brand, search } = req.query;
    let query = "SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE 1=1";
    const params: any[] = [];

    if (category) {
      query += " AND p.category_id = ?";
      params.push(category);
    }
    if (brand) {
      query += " AND p.brand = ?";
      params.push(brand);
    }
    if (search) {
      query += " AND (p.name LIKE ? OR p.description LIKE ?)";
      const searchParam = `%${search}%`;
      params.push(searchParam, searchParam);
    }

    const products = db.prepare(query).all(...params);
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = db.prepare("SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.id = ?").get(req.params.id);
    res.json(product);
  });

  // Blog Routes
  app.get("/api/blogs", (req, res) => {
    const blogs = db.prepare("SELECT * FROM blogs ORDER BY created_at DESC").all();
    res.json(blogs);
  });

  // Inquiry Routes
  app.post("/api/inquiries", (req, res) => {
    const { name, phone, email, message, product_id } = req.body;
    db.prepare("INSERT INTO inquiries (name, phone, email, message, product_id) VALUES (?, ?, ?, ?, ?)").run(name, phone, email, message, product_id || null);
    res.status(201).json({ message: "Inquiry submitted successfully" });
  });

  // Testimonials
  app.get("/api/testimonials", (req, res) => {
    const testimonials = db.prepare("SELECT * FROM testimonials").all();
    res.json(testimonials);
  });

  // Crop Recommendations
  app.get("/api/crop-recommendations", (req, res) => {
    const recommendations = db.prepare("SELECT * FROM crop_recommendations").all();
    res.json(recommendations);
  });

  // Admin Protected Routes (Logic for adding/editing would go here with a middleware)
  const authMiddleware = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };

  app.post("/api/admin/products", authMiddleware, (req, res) => {
    const { name, brand, category_id, description, uses, suitable_crops, image_url, stock_status } = req.body;
    const result = db.prepare("INSERT INTO products (name, brand, category_id, description, uses, suitable_crops, image_url, stock_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)").run(name, brand, category_id, description, uses, suitable_crops, image_url, stock_status);
    res.status(201).json({ id: result.lastInsertRowid });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
