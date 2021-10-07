var rowId = 0;
var colId = 0;

let ec12015 = [
  {
    code: "GE 15-1101B",
    sub_name: "Computer Programming",
    credit: 3,
  },
  {
    code: "AS 15-1102B",
    sub_name: "Engineering Chemistry",
    credit: 3,
  },
  {
    code: "GE 15-1103B",
    sub_name: "Engineering Graphics",
    credit: 5,
  },
  {
    code: "GE 15-1104B",
    sub_name: "Basic Electrical Engineering",
    credit: 3,
  },
  {
    code: "GE 15-1105B",
    sub_name: "Basic Electronics Engineering",
    credit: 3,
  },
  {
    code: "AS 15-1106B",
    sub_name: "Environmental Studies",
    credit: 3,
  },
  {
    code: "GE 15-11L1B",
    sub_name: "Electtrical Engineeering Workshop",
    credit: 1,
  },
  {
    code: "GE 15-11L2B",
    sub_name: "Computer Programmiing Laboratory",
    credit: 1,
  },
];

let ec22015 = [
  {
    code: "AS 15-1201B",
    sub_name: "Calculus",
    credit: 3,
  },
  {
    code: "AS 15-1202B",
    sub_name: "Engineering Physics",
    credit: 3,
  },
  {
    code: "GE 15-1203B",
    sub_name: "Engineering Mechanics",
    credit: 4,
  },
  {
    code: "GE 15-1205B",
    sub_name: "Basic Mechanical Engineering",
    credit: 3,
  },
  {
    code: "HS 15-12L1B",
    sub_name: "Technical Communications and Professional Ethics",
    credit: 2,
  },
  {
    code: "GE 15-12L1B",
    sub_name: "Civil Engineering Workshop",
    credit: 1,
  },
  {
    code: "GE 15-12L2B",
    sub_name: "Mechanical Engineeering Workshop",
    credit: 1,
  },
  {
    code: "HS 15-12L3B",
    sub_name: "Language Lab",
    credit: 1,
  },
  {
    code: "HS 15-12L4B",
    sub_name: "NSS/Nature Conversation",
    credit: 1,
  },
];
//To return lenght of object

function getLengthOfObject(object) {
  objectLenght = Object.keys(object).length;
  console.log("here is the length of table " + objectLenght);
  return objectLenght;
}

function createRow(object) {
  console.log("called createRow here");
  //find lenght of row from object
  var maxNumOfRow = getLengthOfObject(object);
  var table = document.querySelector("#mytable");

  for (var i = 0; i < maxNumOfRow; i++) {
    var row = table.insertRow(-1);
    //rowId = 0;
    for (var j = 0; j < 3; j++) {
      var cell1 = row.insertCell(j);
      cell1.id = rowId;
      switch (j) {
        case 0:
          document.getElementById(rowId).innerHTML = object[i].code;
          break;
        case 1:
          document.getElementById(rowId).innerHTML = object[i].sub_name;
          break;
        case 2:
          document.getElementById(rowId).innerHTML = object[i].credit;
          break;
        default:
          break;
      }
      rowId = rowId + 1; //updte ID
    }
  }
}
