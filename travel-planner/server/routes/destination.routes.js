const destinationController = require("../controllers/destination.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.

*/
module.exports = (app) => {
  /* 
  @route("/api/destinations")
  def create: 

  when this URL is visited, execute the controller function.
  */
  app.post("/api/destinations", destinationController.create);
  app.get("/api/destinations", destinationController.getAll);
  app.get("/api/destinations/:id", destinationController.getOne);
  app.delete("/api/destinations/:id", destinationController.delete);
  app.put("/api/destinations/:id", destinationController.update);
  app.post("/api/destinations/many", destinationController.createMany);
};
