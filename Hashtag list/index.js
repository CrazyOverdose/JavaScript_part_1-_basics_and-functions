/**
 * @param {String} tweet
 * @returns {String[]}
 */


function first_character(line){
    if(line[0] == "#") { 
        return true;
    }

    return false;
}

function hashtag_removal(line){

    return line.slice(1);
}

module.exports = function (tweet) {
    var myarray = tweet.split(" ");

    myarray = myarray.filter(first_character);
    myarray = myarray.map(hashtag_removal);

    return myarray;
};
