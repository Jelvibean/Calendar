var xmlParser = function(xml) {

    var monthsLnth = xml.getElementsByTagName('Month').length,
        monthName,
        numberOfDaysLnth,
        objArray,
        currBound,
        route,
        color,
        months = [],
        NBDates = {
            January: [],
            February: [],
            March: [],
            April: [],
            May: [],
            June: [],
            July: [],
            August: [],
            September: [],
            October: [],
            November: [],
            December: []
        },
        SBDates = {
            January: [],
            February: [],
            March: [],
            April: [],
            May: [],
            June: [],
            July: [],
            August: [],
            September: [],
            October: [],
            November: [],
            December: []
        };



    function calendarLoop(direction) {

        objArray = direction;
        currBound = (objArray == "NorthBound" ? NBDates : SBDates);

        for (i = 0; i < monthsLnth; i++) {
            numberOfDaysLnth = xml.getElementsByTagName(direction)[i].getElementsByTagName("Day").length;
            monthName = xml.getElementsByTagName("Name")[i].childNodes[0].nodeValue;

            if (months.length < 12) {
                months.push('.' + monthName)
            }

            for (j = 0; j < numberOfDaysLnth; j++) {
                monthDaysNB = xml.getElementsByTagName(direction)[i].getElementsByTagName("Day")[j].childNodes[0].nodeValue;
                switch (monthName) {

                    case "January":
                        currBound.January.push(monthDaysNB);
                        break;
                    case "February":
                        currBound.February.push(monthDaysNB);
                        break;
                    case "March":
                        currBound.March.push(monthDaysNB);
                        break;
                    case "April":
                        currBound.April.push(monthDaysNB);
                        break;
                    case "May":
                        currBound.May.push(monthDaysNB);
                        break;
                    case "June":
                        currBound.June.push(monthDaysNB);
                        break;
                    case "July":
                        currBound.July.push(monthDaysNB);
                        break;
                    case "August":
                        currBound.August.push(monthDaysNB);
                        break;
                    case "September":
                        currBound.September.push(monthDaysNB);
                        break;
                    case "October":
                        currBound.October.push(monthDaysNB);
                        break;
                    case "November":
                        currBound.November.push(monthDaysNB);
                        break;
                    case "December":
                        currBound.December.push(monthDaysNB);
                        break;
                }
            }
        }
    }


    function insertDates(route, color) {
        var holder;
        for (var k in route) {
            debugger;
            if (route.hasOwnProperty(k)) {
                //  console.log(k);
                //  console.log(NBDates[k], NBDates[k].length);
                for (var b = 0; b < route[k].length; b++) {
                    holder = route[k][b]; // value
                    if ( $('.' + k + ' .' + holder).hasClass( "blue" ) ) {
                        $('.' + k + ' .' + holder).addClass("grad");
                    }
                    else {
                        $('.' + k + ' .' + holder).addClass(color);
                    }
                };
            }
        }

    }

    calendarLoop('NorthBound');
    calendarLoop('SouthBound');
    insertDates(NBDates, 'blue');
    insertDates(SBDates, 'red');

    // $('.January .3').addClass('blue');

};



$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "readxml.xml",
        dataType: "xml",
        success: xmlParser
    });

});
