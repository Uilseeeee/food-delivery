import fs, { readFile } from 'fs';

// fs => readFile
// fs => writeFile

export const createUser = (req, res) => {
    const { firstname, lastname } = req.body;
    const rawUsers = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUsersData);

    users.push({ firstname, lastname });
   
    fs.writeFileSync('src/db/users.json', JSON.stringify(users));

    res.send("HELLO");
}