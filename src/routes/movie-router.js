import { createMovies } from "../resolvers/movies/create-movies.js";
import { deleteMovies } from "../resolvers/movies/delete-movies.js";
import { getMovies } from "../resolvers/movies/get-movies.js";
import { updateMovies } from "../resolvers/movies/update-movies.js";
import { Router } from "express";

export const moviesRouter = Router();

moviesRouter.get("/", getMovies)
moviesRouter.post("/", createMovies)
moviesRouter.put("/", updateMovies)
moviesRouter.delete("/", deleteMovies)