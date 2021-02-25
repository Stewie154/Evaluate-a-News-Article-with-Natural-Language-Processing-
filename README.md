For the api call, I initially made the call in the formHandler.js file. After this started to work, I then moved the query into the express server via a https.get method, in the /submit route. Now when the api call is made, the apiKey isn't shown in the client side js. 

I have broken up some of the functionality of the main js file (formHandler.js) into smaller files (displayResults.js + formTextValue.js)

Testing: I have written unit tests for the the displayResults and formTextValue functions respectively. I did this by creating mock dom elements and making sure the function output on these elements were what was expected of them. In regards to the formTextValue unit test, I did reference something similar when searching the Udacity website for guidelines in regards to testing (just to be clear.) The link to the page I referenced can be found in a comment at the top of the formTextValue.test.js file. 


> 
