
import fs from 'fs';


export const  createUser = (req, res) =>{   
  const rawUsers = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUsers);
    users.push(req.body);
    res.send(req.body);
       fs.writeFileSync('src/db/users.json', JSON.stringify(users));
}