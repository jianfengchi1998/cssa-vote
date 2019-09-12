module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-filename-extension": 0,
        "react/no-array-index-key": 0,
        "no-nested-ternary": 0,
        "no-plusplus": 0,
        "no-case-declarations": 0,
        "no-alert": 0,
        "jsx-a11y/img-has-alt": 0,
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/href-no-hash": 0,
        "class-methods-use-this": 0,
        "no-mixed-operators": 0,
        "react/no-did-mount-set-state": 0,
        "no-param-reassign": 0,
        "react/forbid-prop-types": 0,
        "function-paren-newline": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/jsx-closing-tag-location": 0,
        "import/no-cycle": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-props-no-spreading": 0
    }
};
