import fs from "fs";

export const updateUser = (req, res) => {
  const rawUsers = fs.readFileSync("src/db/users.json");
    const users = JSON.parse(rawUsers);
  if (users.length > 0) {
    users[0] = { id: 5, name: "Updated" };
    res.json(users[0]);
  } else {
    res.json({ message: "No user to update" });
  }
  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
};
