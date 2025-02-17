const express = require('express');
const app = express();
const port = 3000;

var newUsers = [
    {id: 2, name: 'Uilse'}
];
let newUser = [{id: 1, name: 'Uilse'}];

app.post
('/users', (req, res) => {
    res.send([{
        id: 2,
        name: 'Uilse'
    }]);
});
app.get('/users', (req, res) => {
    res.send([{
        id: 2,
        name: 'Uilse'
    }]);
});
app.put('/users', (req, res) => {
    res.push(newUsers);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    