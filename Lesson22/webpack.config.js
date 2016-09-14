/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
		
        "Classwork/1/build/bundle": "./Classwork/1/src/main.js",
        "Classwork/2/build/bundle": "./Classwork/2/src/main.js",
        "Classwork/3/build/bundle": "./Classwork/3/src/main.jsx",
        "Homework/1/build/bundle": "./Homework/1/src/main.js",
        "Homework/2/build/bundle": "./Homework/2/src/main.js",
        "Homework/3/build/bundle": "./Homework/3/src/main.jsx",
    },
           
    output: {
        filename: '[name].js'
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader", 
				exclude: /node_modules/
            }
        ]
    }
};