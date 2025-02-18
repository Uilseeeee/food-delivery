export const users = [
    {
        firstname: "Uilse",
        lastname: "Bold",
        username: "uilsebold",
        password: "password",
    }
];

export const createUser = (req, res) => {
    const { firstname, lastname } = req.body;

    users.push({ firstname, lastname });
    res.send(Hi);
}