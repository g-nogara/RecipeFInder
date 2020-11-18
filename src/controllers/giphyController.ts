import fetch from 'node-fetch';
import { Recipe } from '../../types';

class GiphyController {
  getGiphyURL(recipeArray: any[]) {
    const recipesWithGif = recipeArray.map(async (recipe) => {
      return await getGiphyData(recipe);
    });
    return recipesWithGif;

    async function getGiphyData(recipe: Recipe) {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${recipe.title}&api_key=${process.env.giphyKEY}&limit=1&rating=g`
      );
      const json = await res.json();
      const { data } = json;
      return data;
    }
  }
}

export default GiphyController;
