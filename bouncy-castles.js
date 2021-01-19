// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  let sphereVol = (4 / 3) * PI * (radius * radius * radius);
  return sphereVol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  let coneVol = (1 / 3) * PI * (radius * radius) * height;
  return coneVol;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  let prismVol = (width * depth) * height;
  return prismVol;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let totalVol = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === 'sphere') {
      totalVol += sphereVolume(solids[i].radius);
    } else if (solids[i].type === "cone") {
      totalVol += coneVolume(solids[i].radius, solids[i].height);
    } else if (solids[i].type === "prism") {
      totalVol += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
    }
  }
  return totalVol;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
