const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const uri =
  "mongodb+srv://tailorTown:tailorTown01@cluster0.r85yoas.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(cors());

let client, db;

async function connectToMongoDB() {
  try {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log("Connected to the MongoDB database");
    db = client.db("tailorTown");
  } catch (error) {
    console.error("Error connecting to the MongoDB database", error);
  }
}

connectToMongoDB();

function closeConnection() {
  client
    .close()
    .then(() => {
      console.log("MongoDB connection closed");
      process.exit(0); // Terminate the application gracefully
    })
    .catch((err) => {
      console.error("Error closing MongoDB connection:", err);
      process.exit(1); // Terminate the application with an error code
    });
}

// Handle application termination signals
process.on("SIGINT", closeConnection);

// Define routes

app.get("/api/tailors", async (req, res) => {
  const collection = db.collection("tailors");

  const data = await collection.find({}).toArray();

  res.send(data);
});

app.post("/api/tailor", async (req, res) => {
  const {
    name,
    price,
    orders,
    category,
    employees,
    suitsDesigned,
    description,
  } = req.body;
  const collection = db.collection("tailors");
  const result = await collection.insertOne({
    name: name,
    price: price,
    orders: orders,
    category: category,
    employees: employees,
    suitsDesigned: suitsDesigned,
    description: description,
  });
  console.log("Document inserted:", result);
  res.send(req.body);
});

app.get("/api/login", async (req, res) => {
  const collection = db.collection("users");
  const { email, password } = req.query;
  const data = await collection
    .find({ email: email, password: password })
    .toArray();
  console.log("Data retrieved:", data);
  if (data.length == 0) res.status(400);
  res.send(data);
});

app.post("/api/user", async (req, res) => {
  const { name, email, password } = req.body;
  const collection = db.collection("users");
  const result = await collection.insertOne({
    name: name,
    email: email,
    password: password,
  });
  console.log("user added:", result);
  res.send(req.body);
});

app.get("/api/user/:email/:pass", async (req, res) => {
  const collection = db.collection("users");
  const data = await collection
    .find({ email: req.params.email, password: req.params.pass })
    .toArray();
  res.send(data);
});

// Start the server
app.listen(5000, () => console.log(`Server running on http://localhost:5000`));
