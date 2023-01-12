const argument = process.argv[2];

const circleArea = (r) => {
  return Math.PI * r * r;
}

console.log(circleArea(argument));

