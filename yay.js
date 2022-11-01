const fs = require("fs");
const axios = require("axios");

const data = fs.readFileSync("data.json");
const arr = JSON.parse(data);
arr.push("hi");

const newArr = JSON.stringify(arr);

fs.writeFile("data.json", newArr, (err) => {
  // error checking
  if (err) throw err;

  console.log("New data added");
});
