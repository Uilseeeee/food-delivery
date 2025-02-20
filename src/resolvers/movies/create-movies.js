import fs from "fs"

export const createMovies = (req, res) => {
    const rawMovies = fs.readFileSync('src/db/movies.json');
    const movies = JSON.parse(rawMovies);
    movies.push(req.body);
    res.send(req.body);
    fs.writeFileSync('src/db/movies.json', JSON.stringify(movies));
}