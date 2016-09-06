/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: {
        "Lesson19/Classwork/1/build/bundle": "./Lesson19/Classwork/1/jsx/main.jsx",
        "Lesson19/Classwork/2/build/bundle": "./Lesson19/Classwork/2/jsx/main.jsx",
        "Lesson19/Classwork/3/build/bundle": "./Lesson19/Classwork/3/jsx/main.jsx"
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
                    presets: ['react']
                }
            }
        ]
    }
};