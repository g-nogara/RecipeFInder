import fetch from "node-fetch";

class GiphyController {
  getGiphyURL(recipeArray: [{title: string}]): Promise<JSON>[] {
    const recipesWithGif = recipeArray.map(
      async (recipe) => await getGiphyData(recipe)
    );

    return recipesWithGif;

    async function getGiphyData(recipe: {title: string}) {
      const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${recipe.title}&api_key=${process.env.giphyKEY}&limit=1&rating=g`
        ),
        json = await res.json(),
        { data } = json;

      return data;
    }
  }
}

export default GiphyController;
