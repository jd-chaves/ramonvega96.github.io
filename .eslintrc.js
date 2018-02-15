module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": false,
        "jquery": true
    },

    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
    "react"
    ],
    "rules": {
        "indent": [
        "error",
        2
        ],
        "no-console":"off",
        "linebreak-style": [
        "error",
        "unix"
        ],
        "quotes": [
        "error",
        "double"
        ],
        "semi": [
        "error",
        "always"
        ]
    }
};