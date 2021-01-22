const blocksAway = function(directions) {
  let startPosition = [0, 0]
  let finalPosition = [0, 0];
  let distanceObject = {};
  for (let i = 0; i < directions.length - 1; i++) {
    // turn right conditions
    if (directions[i] === "right" && directions[i - 2] === "right" && directions[i - 4] === "right") {
      finalPosition[1] -= directions[i + 1];
    } else if (directions[i] === "right" && directions[i - 2] === "right") {
      finalPosition[0] -= directions[i + 1];
    } else if (i === 0 && directions[i] === "right" ||
      directions[i] === "right" && directions[i - 2] === "left") {
      finalPosition[1] += directions[i + 1];
    } 
    //turn left conditions
      else if (directions[i] === "left" && directions[i - 2] === "left" && directions[i - 4] === "left") {
      finalPosition[0] -= directions[i + 1];
    } else if (directions[i] === "left" && directions[i - 2] === "left") {
      finalPosition[1] -= directions[i + 1];
    } else if (i === 0 && directions[i] === "left" ||
      directions[i] === "left" && directions[i - 2] === "right") {
      finalPosition[0] += directions[i + 1];
    } else {
      finalPosition = finalPosition;
    }
  }
  //set object keys east and north to finalPosition[1] and finalPosition[0] respectively, then return distanceObject
  distanceObject.east = finalPosition[1];
  distanceObject.north = finalPosition[0];
  return distanceObject;
};

//checks
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));