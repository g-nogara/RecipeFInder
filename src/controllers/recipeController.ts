import fetch from "node-fetch";
import { Request, Response } from "express";
import { Recipe } from "../../types";
import GiphyController from "./giphyController";

class recipeController {
  async recipeWithGif(req: Request, res: Response): Promise<void> {
    const ingredients = String(req.query.i);
    if (!ingredients || ingredients.split(",").length > 3) {
      res.status(400).json({
        error: "Use at least one and no more than three ingredients",
      });
    }

    const treatedRecipe = await getRecipe(ingredients, res);
    const giphyController = new GiphyController();
    const arrGiphys = giphyController.getGiphyURL(treatedRecipe);
    Promise.all(arrGiphys).then((arrUrls) => {
      const finalResult = {
        keywords: ingredients,
        recipes: treatedRecipe.map((recipe: Recipe, index: string | number) => {
          const currentGif = arrUrls[index];
          currentGif
            ? (recipe.gif = currentGif[0].images.original.url)
            : (recipe.gif = "No giphy found for this recipe");
          return recipe;
        }),
      };
      res.status(200).json(finalResult);
    });

    function getRecipe(ingredients: string, res: Response) {
      const recipe = fetch(`http://www.recipepuppy.com/api/?i=${ingredients}`)
        .then((resPuppy) => {
          if (resPuppy.status != 200) {
            res.status(404).json({ error: "RecipePuppy found nothing!" });
          }
          return resPuppy.json();
        })
        .then((json) => {
          const { results } = json;
          const parsedResponse = results.map((recipe: Recipe) => {
            recipe.ingredients = String(recipe.ingredients).split(", ").sort();
            recipe.link = recipe.href;
            delete recipe.href;
            return recipe;
          });
          return parsedResponse;
        });
      return recipe;
    }
  }
}

export default recipeController;
