import express = require("express");
import http = require("http");

import recipeRoute from "./src/routes/recipeRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/recipes", recipeRoute);

const server = new http.Server(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  const giphyKEY = process.env.giphyKEY;
  const giphyWS = checkWebService(
    `http://api.giphy.com/v1/gifs/search?q=teste&api_key=${giphyKEY}`
  );
  const recipepuppyWS = checkWebService("http://www.recipepuppy.com/api/");
  if (!giphyWS && !recipepuppyWS) {
    console.log({ error: "A webservice we depend upon is offline" });
    server.close();
  } else console.log(`Listening on port ${port}`);
});

function checkWebService(service: string) {
  return http.get(service, (res) => {
    const { statusCode } = res;
    return statusCode == 200
  });
}
