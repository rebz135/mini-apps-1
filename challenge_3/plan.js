Features:
-Series of forms for checkout
-Checkout button
	-When clicked, takes user to:
		-F1: form with name, email, password
			-Next button -> F2
		-F2: form with shipping address (line 1, line 2, city, state, zip code), phone
			-Next button -> F3
		-F3: form with credit card #, expiry date, CVV, billing zip code
			-Next button -> confirmation page
-Confirmation page
	-Summarize data from F1-F3
	-Purchase button --> homepage
-Checkout creates a new record in database
-Each step in checkout saves data to record (data saved when next is clicked)


TODOs:
	// -Install and --save
	// 	-Express [DONE]
	// 	-Babel [DONE]
	// 	-React [DONE]
	// 	-nodemon [DONE] 
	// -Install mySQL locally [DONE]
	// -Set up babel to watch for changes [add to npm start?] [DONE]
	// -Set up nodemon to watch for changes, add to npm start [DONE]
	-Set up MySQL database
		-Design schema
		-Set up tables
	// -Set up server
	// 	-Require
	// 		-Express
	// 		-bodyparser
	// 	-Use
	// 		-client folder
			// -bodyparser
		-Set up server to take post requests
		-Set up server to take get requests
	// -Set up index.html [DONE]
		// -Create index.html with boilerplate html [DONE]
		// -Set up React
		// -Create form class
		// -Create button class [DONE]
		// -Render
		// 	-Add checkout button [DONE]
		// 	-Add F1 form [DONE]
		// 	-Add F1 next button [DONE]
		// 	-Add F2 form [DONE]
		// 	-Add F2 next button [DONE]
		// 	-Add F3 form [DONE]
		// 	-Add F3 next button [DONE]
		// -Add confirmation page div and header [DONE]
		// -Add purchase button [DONE]
	-Create function that pulls data from database for given record
	-Append data to confirmation page
	// -Set up so that when page loads all forms are hidden [DONE]
	// -Set up so that forms hide/show when different buttons are clicked [DONE]
	-Add event listeners
		-Checkout button
			-On click
				// -Render F1 [DONE]
				-Submit data to database
		-F1 next button
			-On click
				// -Render F2 [DONE]
				-Submit data to database
		-F2 next button
			-On click
				// -Render F3 [DONE]
				-Submit data to database
		-F3 next button
			-On click
				// -Render confirmation page [DONE]
				-Submit data to database
		// -Purchase button
		// 	-On click [DONE]
		// 		-Render homepage [DONE]



Extra:
	-Refactor to use MongoDB
