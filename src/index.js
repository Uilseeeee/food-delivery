import express from 'express';
import { getUsers } from './resolvers/users/get-users.js';
import { createUser } from './resolvers/users/create-users.js';
import { deleteUser } from './resolvers/users/delete-users.js';
// import { updateUser } from './resolvers/users/update-users.js';

const app = express();
const port = 3000;

app.use(express.json());




app.post('/users', createUser)

app.get('/users', getUsers);

app.delete('/users', deleteUser);

// app.put ('/users', updateUser);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    