let input = process.argv.splice(2);

input = input.filter( (x) => (x > 0));

input.sort((a, b) => {
  return a - b;
});

input = input.map((x) => x * 1000);
// console.log(input)

for (let time of input) {

  setTimeout(() => {
    process.stdout.write('\x07');

  }, time);
}