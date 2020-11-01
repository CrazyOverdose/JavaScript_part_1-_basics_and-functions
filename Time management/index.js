/**
 * @param {String} date
 * @returns {Object}
 */

 function to_int(element){
    return parseInt(element);
 }

 function zero(element){
    
    if (element < 10){
        element = "0"+element;
    }
    
    return element
 }

 function an_exception(number_of_units, line){
    var commands = ["years", "months", "days", "hours", "minutes"];

    if (isNaN(number_of_units) || number_of_units < 0) {
        throw new TypeError("wrong number");
    }

    if (!commands.includes(line)){
        throw new TypeError("there is no such command");
    }
 }

 function change_of_date(number_of_units, line, _date){
    if(line === "years" ){
        _date.setFullYear(_date.getFullYear()+number_of_units);
    }
    else if (line === "months"){
        _date.setMonth(_date.getMonth()+number_of_units);
    }
    else if (line === "days"){
        _date.setDate(_date.getDate()+number_of_units);
    }
    else if (line === "hours"){
        _date.setHours(_date.getHours()+number_of_units);
    }
    else {
        _date.setMinutes(_date.getMinutes()+number_of_units);
    }

    return _date;
 }

module.exports = function (date) {

    var _date_ = date.slice(0, date.indexOf(" ")).split("-").map(to_int);

    var _time_ = date.slice(date.indexOf(" ")+1).split(":").map(to_int);

    var _date = new Date(_date_[0], _date_[1]-1, _date_[2], _time_[0], _time_[1]);

    return { 

        add : function(number_of_units, line) {

                    number_of_units = parseInt(number_of_units);

                    an_exception(number_of_units, line);

                    _date = change_of_date(number_of_units, line, _date);

                return this;
       },

       subtract: function(number_of_units, line) {

            number_of_units = parseInt(number_of_units);

            an_exception(number_of_units, line);

            _date = change_of_date(-1*number_of_units, line, _date);

        return this;
},
        
        get value(){

            var year = zero(_date.getFullYear());
            var month = zero(_date.getMonth()+1);
            var date = zero(_date.getDate());
            var hours = zero(_date.getHours());
            var minutes = zero(_date.getMinutes());

            return year + "-" + month + "-" + date + " " + hours + ":" + minutes;
        }
    }
};
