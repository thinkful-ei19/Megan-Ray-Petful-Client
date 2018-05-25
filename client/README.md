# Petful Backend Made With Create React App

A React app made with Redux to showcase adoptable dogs and cats.  People are only allowed to adopt the cat and/or dog that has been in the queue/waiting list the longest.  After adoption, the next cat and/or dog will appear to be adopted (and for our purposes the adopted animal will be put back at the end of the queue to keep the data continuous).  We receive our animal data from our backend and display it in the UI.

##Deployed Version: 
[Petful Deployed](http://dazzling-kirch-250b9b.netlify.com/)

##BackEnd:
[Petful Backend](https://github.com/thinkful-ei19/Megan-Ray-Petful-Server)


## Getting started (Development Mode)
    -npm install
    -npm start (to start on localhost:3000)
        --Please note you should have the following in package.json:

                "dependencies": {
                "react": "^16.4.0",
                "react-dom": "^16.4.0",
                "react-redux": "^5.0.7",
                "react-scripts": "1.1.4",
                "redux": "^4.0.0",
                "redux-thunk": "^2.2.0"
            },
            "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject"
            }
    
##Locations:
    Main/Displayed Component:
    -Dashboard.js

    Pet Component:
    -Pet.js (holds base component to be updated with data about next adoptable dog or cat)

    Reducers:
    -reducers/cat.js and reducers/dog.js (both hold the state which holds the object with information on the next adoptable cat and dog respectively)

    Combined Reducers:
    -reducers/index.js

    Actions/Get/Delete Requests:
    -actions/cat.js and actions/dog.js (both hold actions that will be dispatched to our reducers upon loading the page or clicking adopt)
