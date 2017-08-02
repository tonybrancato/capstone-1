function getDataFromApi(searchTerm) {
	const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.edamam.com/search?from=0&calories=gte%20591%2C%20lte%20722&health=alcohol-free",
	"method": "GET",
	"headers": {
			"cache-control": "no-cache",
	},
	data: {
		q: `${searchTerm}`,
		app_id: '043a2aae',
		app_key: '5b559e45b1e2e78391957184544bfc95',
		to: '2'
	},
	dataType: 'json',
//	success: callback
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    console.log('query is ',query);
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query);
  });
}

$(watchSubmit);