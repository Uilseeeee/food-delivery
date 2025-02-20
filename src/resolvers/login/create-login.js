import fs from "fs";
import jwt from "jsonwebtoken";

const SECRET_KEY = "mysecretkey";

export const createLogin = (req, res) => {
  const rawUsers = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUsers);
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    var token = jwt.sign({ id: user.id, username: user.name }, SECRET_KEY);
    res.json({
      message: "Login successful",
      token: token,
    });
  } else {
    res.json({ message: "Invalid username or password" });
  }
};
