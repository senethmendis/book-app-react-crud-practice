import e from "express";
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "booker",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// --------------------------------------------------------

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello You reached Server!");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    // console.table(data);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.description, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return err;
    return res.json("created Shit!");
  });
});

app.listen(3001, () => {
  console.log("connected to backend on port 3001 !");
});
