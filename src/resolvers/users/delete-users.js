import fs from 'fs';

export const deleteUser = (req, res) => {
    const rawUsers = fs.readFileSync('src/db/users.json');
    const user = JSON.parse(rawUsers);
if (user.length > 0) {
    const removedUser = user.pop();
    res.json(removedUser);
}
    else {
res.json({ message: "No user to delete" });
    }
    fs.writeFileSync('src/db/users.json', JSON.stringify(user));
}

