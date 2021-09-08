const express = require("express");
const port = 8000;

const app = express();

// req.body will be undefined without this.
app.use(express.json());

/* 
In Flask this would be the route above and the callback bellow.

@app.route("/")
def Home:
  return "Hello"
*/
app.get("/", (req, res) => {
  res.send("Hello from express server.");
});

app.get("/api/cities", (req, res) => {
  const pretendWeGotThisDataFromADB = [
    {
      id: 1,
      name: "Aogashima",
      population: 170,
    },
    {
      id: 2,
      name: "Longyearbyen",
      population: 2144,
    },
    {
      id: 3,
      name: "Kennedy Meadows",
      population: 28,
    },
  ];
  res.json(pretendWeGotThisDataFromADB);
});

app.post("/api/cities", (req, res) => {
  res.json({
    status: "success",
    city: req.body, // the submitted form data / postman data as JSON
  });
});

app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    message: `Deleted city id: ${req.params.id}`,
  });
});

// put is used for updating an existing record
app.put("/api/cities/:id", (req, res) => {
  console.log("updated data", req.body);

  res.json({
    status: "success",
    message: `Updated city id: ${req.params.id}`,
  });
});

app.get("/api/cities/:id", (req, res) => {
  res.json({ id: req.params.id });
});

// This is at the bottom because we are not ready for requests until the
// the routes have been set up.
app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
