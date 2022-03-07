module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "viewer": "readonly",
        "WEB_CONFIG": "readonly",
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "linebreak-style": [0, "error", "windows"],
        "no-unused-vars": "off",
        "no-debugger": "off",
        "no-useless-escape": "off",
        "no-console": "off",
        "no-empty": "off",
        "vue/no-unused-components": "off",
        "vue/no-side-effects-in-computed-properties": "off"
    }
};