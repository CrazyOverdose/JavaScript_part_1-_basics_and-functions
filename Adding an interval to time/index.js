/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

    // Параметр часы принимает значение в диапазоне [0, 23].
    // Параметр минуты принимает значение в диапазоне [0, 59].

    hours += Math.floor((minutes + interval)/60);
    minutes = (minutes + interval) % 60;      // обработка минут

    //обработка часов 

    hours %= 24;

    if ( minutes >= 0 && minutes <= 9){
        minutes = "0" + minutes;
    }

    if ( hours >= 0 && hours <= 9){
        hours = "0" + hours;
    }

    return hours + ":" + minutes;
};
