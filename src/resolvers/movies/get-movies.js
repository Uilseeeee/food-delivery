import fs from "fs"

export const getMovies = (req, res) => {
    const rawMovies = fs.readFileSync('src/db/movies.json');
    const movies = JSON.parse(rawMovies);
    res.json(movies);
}