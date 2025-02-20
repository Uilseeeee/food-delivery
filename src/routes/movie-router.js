import { createMovies } from "../resolvers/movies/create-movies";
import { deleteMovies } from "../resolvers/movies/delete-movies";
import { getMovies } from "../resolvers/movies/get-movies";
import { updateMovies } from "../resolvers/movies/update-movies";
import { Router } from "express";

export const movieRouter = Router();

movieRouter.get("/", getMovies)
movieRouter.post("/", createMovies)
movieRouter.put("/", updateMovies)
movieRouter.delete("/", deleteMovies)