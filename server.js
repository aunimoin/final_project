// import dependencies
const express = require("express");
("use strict");
const yelp = require("yelp-fusion");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
// set up port and listen (good practice to place it all the way at the bottow of the file)
const PORT = process.env.PORT || 3300;
app.use(cors());
app.options("*", cors());

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const food = (req, res, next) => {
  // Client ID = tYSQzk85DWsvdrmP5r2j7w
  const apiKey = process.env.YELP_API_KEY;
  // console.log("this is req.params.location", req.params.location);
  const searchRequest = {
    term: "food trucks stands carts street vendors",
    location: req.params.location
  };

  const client = yelp.client(apiKey);

  client
    .search(searchRequest)
    .then(response => {
      const results = response.jsonBody.businesses;
      // const prettyJson = JSON.stringify(firstResult, null, 4);
      // console.log(prettyJson, res.locals, "GETTING DATA");
      res.locals.data = results;
      // console.log(firstResult);
      next();
    })
    .catch(e => {
      console.log(e);
      next(e);
    });
};

app.get("/api/:location", food, (req, res) => {
  // console.log(res.locals);
  // console.log("this is req.body:", req.body);
  res.json(res.locals);
});

app.listen(PORT, () => {
  console.log(`Connected now on port ${PORT}`);
});
