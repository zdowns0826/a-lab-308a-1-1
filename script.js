let i = 0;

function recursiveFunction() {
  i++;
  recursiveFunction();
}

try {
  recursiveFunction();
} catch {
  console.log("failed");
  console.log(i);
}