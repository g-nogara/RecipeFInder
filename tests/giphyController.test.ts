import GiphyController from "../src/controllers/giphyController";

test("giphyController", async () => {
  // Controller has a single method with auxiliary functions
  // So a simple success call covers 100% of the cases
  const controller = new GiphyController()
  const arrPromises = controller.getGiphyURL([{title: "banana"}])
  const arrGiphys = await Promise.all(arrPromises)
  arrGiphys.forEach(arrContent => {
    expect(arrContent[0]).toHaveProperty('url')
  })
})