import express = require("express");
const recipeRouter = express.Router();

import RecipeController from "../controllers/recipeController";

const controller = new RecipeController();

recipeRouter.get("/", controller.recipeWithGif);

export default recipeRouter;
