const express = require("express");
const axios = require("axios");
const auth = require("registry-auth-token");
const app = express();

let auth = "97f9898f-3ca8-4a08-bccb-6a9705da94f9"
app.get("/", async (req, res) => {
  await axios
    .get("/exniamo", {
      headers: {
        Authorization: "Basic " + auth
      },
    })
    .then((response) => res.send(response))
    .catch((error) => console.log(error));
});

app.listen(3000, () => {
  console.log("app running on port...");
});
