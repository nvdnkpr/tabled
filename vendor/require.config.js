var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "examples/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "examples/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "examples/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.12",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "examples/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "examples/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "examples/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "examples/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "examples/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "examples/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}