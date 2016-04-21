'use strict';

var REGEXP = /^(?:\~\~)([\s\S]+?)(?:\~\~)/;

module.exports = function (input) {
    var parsed = REGEXP.exec(input);

    if (parsed) {
        return {
            original: parsed[0],
            parsed: parsed[1]
        };
    }

    return undefined;
};
