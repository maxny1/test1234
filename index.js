var request = require("request");
var querystring = require('querystring');
var qid = req.query.q; // $_GET["id"]
const express = require('express');
var options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  qs: {
    autoCorrect: 'false',
    pageNumber: '1',
    pageSize: '10',
    q: qid,
    safeSearch: 'false'
  },
  headers: {
    'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    'x-rapidapi-key': 's5slRJjkFQmshfJgW5JefHib08pup1AM8Fgjsny9lKKOOexowG'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
