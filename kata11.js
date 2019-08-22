const organizeInstructors = function(instructors) {
  let returnObj = {};
  for (let item of instructors) {
    if (!returnObj[item.course])
      returnObj[item.course] = [];

    returnObj[item.course].push(item.name);
  }
  return returnObj;
};


//tests
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
