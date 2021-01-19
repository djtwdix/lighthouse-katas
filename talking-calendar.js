const talkingCalendar = function(date) {
  let splitDate = date.split("/") //split string at "/"
  let year = splitDate[0]
  let month = "";
  let day = "";

  //change month from number to month name

  switch (splitDate[1]) {
    case "01":
      month = "January"
      break;
    case "02":
      month = "February"
      break;
    case "03":
      month = "March"
      break;
    case "04":
      month = "April"
      break;
    case "05":
      month = "May"
      break;
    case "06":
      month = "June"
      break;
    case "07":
      month = "July"
      break;
    case "08":
      month = "August"
      break;
    case "09":
      month = "September"
      break;
    case "10":
      month = "October"
      break;
    case "11":
      month = "November"
      break;
    case "12":
      month = "December"
      break;
  }

  //change day from two digit number to get rid of zeros for single digits and add ordinal indicators to all

  switch (splitDate[2]) {
    case "01":
      day = "1st"
      break;
    case "02":
      day = "2nd"
      break;
    case "03":
      day = "3rd"
      break;
    case "04":
      day = "4th"
      break;
    case "04":
      day = "5th"
      break;
    case "06":
      day = "6th"
      break;
    case "07":
      day = "7th"
      break;
    case "08":
      day = "8th"
      break;
    case "09":
      day = "9th"
      break;
    case "10":
      day = "10th"
      break;
    case "11":
      day = "11th"
      break;
    case "12":
      day = "12th"
      break;
    case "13":
      day = "13th"
      break;
    case "14":
      day = "14th"
      break;
    case "15":
      day = "15th"
      break;
    case "16":
      day = "16th"
      break;
    case "17":
      day = "17th"
      break;
    case "18":
      day = "18th"
      break;
    case "19":
      day = "19th"
      break;
    case "20":
      day = "20th"
      break;
    case "21":
      day = "21st"
      break;
    case "22":
      day = "22nd"
      break;
    case "23":
      day = "23rd"
      break;
    case "24":
      day = "24th"
      break;
    case "25":
      day = "25th"
      break;
    case "26":
      day = "26th"
      break;
    case "27":
      day = "27th"
      break;
    case "28":
      day = "28th"
      break;
    case "29":
      day = "29th"
      break;
    case "30":
      day = "30th"
      break;
    case "31":
      day = "31st"
      break;
  }
  return month + " " + day + ", " + year;
};

// checks

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
