import jwt from "jsonwebtoken"
const SECRET_KEY = "mysecretkey"
import fs from "fs"


export const authorization = (req, res, next) => {
    const rawUsers = fs.readFileSync('src/db/users.json');
    const users = JSON.parse(rawUsers);
    var token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    } 
token = token.replace('Bearer ', '');
jwt.verify(token, SECRET_KEY, (err, users) => {
    if (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.users = users;
    next();
});
};