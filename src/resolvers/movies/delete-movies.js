import fs from "fs"

export const deleteMovies = (req, res) => {
    const rawMovies = fs.readFileSync('src/db/movies.json');
    const movies = JSON.parse(rawMovies);
    if (movies.length > 0) {
        const removedMovie = movies.pop();
        res.json(removedMovie);
    }
    else {
        res.json({ message: "No movie to delete" });
    }
    fs.writeFileSync('src/db/movies.json', JSON.stringify(movies));
}