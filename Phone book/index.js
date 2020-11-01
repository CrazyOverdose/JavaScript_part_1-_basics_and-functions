// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    
    if (command == "SHOW"){
        
        var myarray = [];

        for(const i in phoneBook) {
            myarray.push(i + ": " + phoneBook[i].join(", "));
        }

        return myarray.sort();
    }

    else if (command.slice(0,3) == "ADD"){
        var line = command.slice(3).trim();

        var name = line.slice(0, line.indexOf(" "));

        line = line.slice(line.indexOf(" ") + 1 );

        var numbers = line.split(",");

        if (name in phoneBook){
            phoneBook[name] = phoneBook[name].concat(numbers) ;
        }
 
        else {
            phoneBook[name] = numbers; 
        }
        
    }

    else if (command.slice(0,12) == "REMOVE_PHONE"){
        var number = command.slice(12).trim();

        for(const i in phoneBook) {
            if (phoneBook[i].includes(number)){
                phoneBook[i].splice(phoneBook[i].indexOf(number),1);
                if( phoneBook[i].length == 0)
                    delete phoneBook[i];
                return true;
            }
        }
        return false;
    }

};
