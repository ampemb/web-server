import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/about", (req, res) => {
  res.send("This is a web programming course");
});

// Unit 2 Exercise

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/repeat/:word", (req, res) => {
  const word = req.params.word;
  res.send(`${word} ${word} ${word}`);
});

app.get("/count", (req, res) => {
  const from = req.query.from || "1";
  const to = req.query.to || "10";
  res.send(`Counting from "${from}", to ${to} results.`);
});

app.get("/api/info", (req, res) => {
  const userInfo = { name: "Jane", id: 123 };
  res.json(userInfo);
});

app.get("/api/error", (req, res) => {
  res.status(400).send("Bad Request.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
