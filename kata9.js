function getMonth(month){
  if (month[0] === '0') month = month.replace('0', ''); //remove leading 0 if there is any
  switch (month){
    case '1':
      return "January";
    case '2':
      return "February";
    case '3':
      return "March";
    case '4':
      return "April";
    case '5':
      return "May";
    case '6':
      return "June";
    case '7':
      return "July";
    case '8':
      return "August";
    case '9':
      return "September";
    case '10':
      return "October";
    case '11':
      return "November";
    case '12':
      return "December";
    default:
      console.log(`Error: ${month} is not a valid month`);
      return 'error';
  }
}

function getDay(day){
  if (day[0] === '0') day = day.replace('0', ''); //remove leading 0 if there is any
  if (day > 3 && day < 21) return day + 'th'; 
  switch (day % 10) {
    case 1:  
      return day + 'st';
    case 2:  
      return day + 'nd';
    case 3:  
      return day + 'rd';
    default:
      return day + 'th';
  }
}

function talkingCalendar(date){
  let dateArray = date.split('/');
  return getMonth(dateArray[1]) + ' ' + getDay(dateArray[2]) + ', ' + dateArray[0];
}

//tests
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));