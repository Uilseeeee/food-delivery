import fs from 'fs';


export const  getUsers = (req, res) =>{  
    const rawUsers = fs.readFileSync('src/db/users.json');
    var users = JSON.parse(rawUsers);  
    res.json(users);
}