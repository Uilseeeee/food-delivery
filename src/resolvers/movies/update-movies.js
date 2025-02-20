import fs from "fs"

export const updateMovies = (req, res) => { 
    const rawMovies = fs.readFileSync('src/db/movies.json');
    const movies = JSON.parse(rawMovies);
    const { id, ...rest } = req.body;
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex > -1) {
        movies[movieIndex] = { id, ...rest };
        res.json(movies[movieIndex]);
    }
    else {
        res.json({ message: "No movie to update" });
    }
    fs.writeFileSync('src/db/movies.json', JSON.stringify(movies));
}