// curent date
function myFunction() {
  // initializing an array 
  const months = [
      "January", "February", 
      "March", "April", "May", 
      "June", "July", "August",
      "September", "October", 
      "November", "December"
  ];

  const d = new Date();
  document.getElementById(
      "demoID").innerHTML =
      "The current month is " 
      + months[d.getMonth()];
}

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()]; // "July" (or current month)

var months = moment.monthsLong();

var datesofmonth = createAllDatesOfMonth(months[1], 2021)

console.log(datesofmonth);


function createAllDatesOfMonth(month, year) {
  let year_month = year + "-" + month;
  let nbdays = moment(year_month, "YYYY-MMM").daysInMonth();
  return Array.from(Array(nbdays).keys()).map((d) => month + " " + (d + 1));
}
//Task Categories
let workoutList = [
    {
      
      "id": "1",
      "name": "CARDIO CHALLENGE",
      "icon": "",
      "index":""
    },
    {
        "id": "2",
        "name": "TABATA POWER",
        "icon": "yellow"
    },
    {
        "id": "3",
        "name": "SWEAT INTERVALS",
        "icon": "green"
      },
      {
        "id": "4",
        "name": "FRIDAY FIGHT: ROUND 1",
        "icon": "purple"
      },
     
      {
          "id": "5",
          "name": "TABATA STRENGTH",
          "icon": "yellow"
      },
      {
          "id": "6",
          "name": "MAX OUT CARDIO",
          "icon": "green"
        },
        {
          "id": "7",
          "name": "MAX OUT SWEAT",
          "icon": "purple"
        },
        {
          "id": "8",
          "name": "MAX OUT POWER",
          "icon": "purple"
        },
        {
          "id": "9",
          "name": "MAX OUT STRENGTH",
          "icon": "purple"
        },
        {
          "id": "10",
          "name": "FRIDAY FIGHT: ROUND 2",
          "icon": "purple"
        },
        ,
      {
        "id": "11",
        "name": "PULSE",
        "icon": "red"
      },
      {
        "id": "12",
        "name": "DAY OFF",
        "icon": "red"
      }
  ]

class Workout{
  constructor(){
    this.id,
    this.name
    this.workout_id
    this.time,
    this.date

  }
}

let workout =  new Workout();

let week1=  new Workout();
let week2=  new Workout();
let week3=  new Workout();
let week4=  new Workout();
let week5=  new Workout();
let week6=  new Workout();
let week7=  new Workout();
let week8=  new Workout();

workouts = day + wo


let week3=[
  {  
    "id":"15",
    "name":"Day 15",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "16",
    "name":"Day 16",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "17",
    "name":"Day 17",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"18",
    "name":"Day 18",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"19",
    "name":"Day 19",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"20",
    "name":"Day 20",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"21",
    "name":"Day 21",
    "workout_id":"",
    "time":"",
    "date":""
  }
  
]
let week4=[
  {  
    "id":"22",
    "name":"Day 22",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "23",
    "name":"Day 23 ",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "24",
    "name":"Day 24",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"25",
    "name":"Day 25",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"26",
    "name":"Day 26",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"27",
    "name":"Day 27",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"28",
    "name":"Day 28",
    "workout_id":"",
    "time":"",
    "date":""
  }
]
let week5=[
  {  
    "id":"29",
    "name":"Day 29",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "30",
    "name":"Day 30",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "31",
    "name":"Day 31",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"32",
    "name":"Day 32",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"33",
    "name":"Day 33",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"34",
    "name":"Day 34",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"35",
    "name":"Day 35",
    "workout_id":"",
    "time":"",
    "date":""
  }
  
]

let week6=[
  {  
    "id":"36",
    "name":"Day 36",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "37",
    "name":"Day 37",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "38",
    "name":"Day 38",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"39",
    "name":"Day 39",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"40",
    "name":"Day 40",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"41",
    "name":"Day 41",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"42",
    "name":"Day 42",
    "workout_id":"",
    "time":"",
    "date":""
  }
]

let week7=[
  {  
    "id":"43",
    "name":"Day 43",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "44",
    "name":"Day 44",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "45",
    "name":"Day 45",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"46",
    "name":"Day 46",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"47",
    "name":"Day 47",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"48",
    "name":"Day 48",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"49",
    "name":"Day 49",
    "workout_id":"",
    "time":"",
    "date":""
  }
  
]

let week8=[
  {  
    "id":"50",
    "name":"Day 50",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
     "id": "51",
    "name":"Day 51",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id": "52",
    "name":"Day 52",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"53",
    "name":"Day 53",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
      
    "id":"54",
    "name":"Day 54",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"55",
    "name":"Day 55",
    "workout_id":"",
    "time":"",
    "date":""
  },
  {
    "id":"56",
    "name":"Day 56",
    "workout_id":"",
    "time":"",
    "date":""
  }
  
]