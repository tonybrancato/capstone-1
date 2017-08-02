let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.edamam.com/search?q=beef&app_id=043a2aae&app_key=5b559e45b1e2e78391957184544bfc95&from=0&to=3&calories=gte%20591%2C%20lte%20722&health=alcohol-free",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "5922ae12-1471-537b-45c2-24e7e9ed3d3c"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});