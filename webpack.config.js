/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: {
        "Lesson19/Classwork/1/build/bundle": "./Lesson19/Classwork/1/jsx/main.jsx",
        "Lesson19/Classwork/2/build/bundle": "./Lesson19/Classwork/2/jsx/main.jsx",
        "Lesson19/Classwork/3/build/bundle": "./Lesson19/Classwork/3/jsx/main.jsx",
        "Lesson19/Homework/1/build/bundle": "./Lesson19/Homework/1/jsx/main.jsx",
        "Lesson19/Homework/2/build/bundle": "./Lesson19/Homework/2/jsx/main.jsx",
        "Lesson19/Homework/3/build/bundle": "./Lesson19/Homework/3/jsx/main.jsx",
        "Lesson20/Classwork/1/build/bundle": "./Lesson20/Classwork/1/jsx/main.jsx",
        "Lesson20/Classwork/2/build/bundle": "./Lesson20/Classwork/2/jsx/main.jsx",
        "Lesson20/Classwork/3/build/bundle": "./Lesson20/Classwork/3/jsx/main.jsx",
        "Lesson20/Homework/1/build/bundle": "./Lesson20/Homework/1/jsx/main.jsx",
        "Lesson20/Homework/2/build/bundle": "./Lesson20/Homework/2/jsx/main.jsx",
        "Lesson20/Homework/3/build/bundle": "./Lesson20/Homework/3/jsx/main.jsx",
        "Lesson21/Classwork/1/build/bundle": "./Lesson21/Classwork/1/jsx/main.jsx",
        "Lesson21/Classwork/2/build/bundle": "./Lesson21/Classwork/2/jsx/main.jsx",
        "Lesson21/Classwork/3/build/bundle": "./Lesson21/Classwork/3/jsx/main.jsx",
        "Lesson21/Homework/1/build/bundle": "./Lesson21/Homework/1/jsx/main.jsx",
        "Lesson21/Homework/2/build/bundle": "./Lesson21/Homework/2/jsx/main.jsx",
        "Lesson21/Homework/3/build/bundle": "./Lesson21/Homework/3/jsx/main.jsx",
        "Lesson22/Classwork/1/build/bundle": "./Lesson22/Classwork/1/src/main.js",
        "Lesson22/Classwork/3/build/bundle": "./Lesson22/Classwork/3/src/main.jsx",
        "Lesson24/Classwork/1/build/bundle": "./Lesson24/Classwork/1/jsx/main.jsx",
        "Lesson24/Classwork/2/build/bundle": "./Lesson24/Classwork/2/jsx/main.jsx",
        "Lesson24/Classwork/3/build/bundle": "./Lesson24/Classwork/3/jsx/main.jsx",
        "Lesson24/Homework/1/build/bundle": "./Lesson24/Homework/1/jsx/main.jsx",
        "Lesson24/Homework/2/build/bundle": "./Lesson24/Homework/2/jsx/main.jsx",
        "Lesson24/Homework/3/build/bundle": "./Lesson24/Homework/3/jsx/main.jsx",
        "Lesson25/Classwork/1/build/bundle": "./Lesson25/Classwork/1/src/pages/main.js",
        "Lesson25/Classwork/2/build/bundle": "./Lesson25/Classwork/2/src/pages/main.js",
        "Lesson25/Classwork/3/build/bundle": "./Lesson25/Classwork/3/src/pages/main.js",

    } ,

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015','react']
                }
            }
        ]
    }
};