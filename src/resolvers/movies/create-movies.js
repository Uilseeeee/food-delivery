import fs from "fs"

export const createMovies = (req, res) => {
    const rawMovies = fs.readFileSync('src/db/movies.json');
    const {title , genres , year , rating} = req.body;
    if (!title || !genres || !year || !rating) {
        return res.send({ message: "All fields are required" });
    }
   
    const movies = JSON.parse(rawMovies);
    movies.push({title , genres , year , rating});  
    fs.writeFileSync('src/db/movies.json', JSON.stringify(movies));
    res.send("Successfully added movie");
}