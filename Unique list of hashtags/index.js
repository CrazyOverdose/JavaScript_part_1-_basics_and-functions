/**
 * @param {String[]} hashtags
 * @returns {String}
 */

function unique(element, index, hashtags){
    if (hashtags.indexOf(element) != index){
        return false;
    }

    return true;
}

function register(element){
    element =  element.toLowerCase();
    return element;
}


module.exports = function (hashtags) {
    var myline = hashtags.map(register).filter(unique).join(", ");

    return myline;
};
