require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const getUsers = require("./functions/getUsers");
const getTweets = require("./functions/getTweets");

app.use(cors());
app.disable("x-powered-by");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  const name = req.query.name;

  if (name !== undefined) {
    const users = await getUsers();

    const user = users.find(
      (user) => user.name.toUpperCase() === name.toUpperCase()
    );

    if (user !== undefined) {
      const feed = [];

      const tweets = await getTweets();

      tweets.forEach((tweet) => {
        if (user.name === tweet.name || user.following.includes(tweet.name)) {
          feed.push(tweet);
        }
      });

      if (feed.length > 0) {
        res.json({
          status: "success",
          followsCount: user.following.length,
          feed: feed,
        });
      } else {
        res.json({
          status: "failed",
          error: "Sorry, it seems your friends don't like you.",
        });
      }
    } else {
      res.json({
        status: "failed",
        error: "Nope! Are you sure that's your name?",
      });
    }
  } else {
    res.json({
      status: "failed",
      error: "Nope! Let's try and stick to the rules.",
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Feed App Server is running at: http://localhost:${port}`);
});
