import fs from "fs";

export const updateUser = (req, res) => {
  const rawUsers = fs.readFileSync("src/db/users.json");
    const user = JSON.parse(rawUsers);
  if (user.length > 0) {
    user[0] = { id: 4, name: "Updated" };
    res.json(user[0]);
  } else {
    res.json({ message: "No user to update" });
  }
};
