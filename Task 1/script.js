const numbers = [1, 2, 3, 4, 5];

function showResult(text) {
  document.getElementById("output").textContent = text;
}

function demoMap() {
  const result = numbers.map((num) => num * 2);
  showResult(`Original: [${numbers}]\nmap(num * 2): [${result}]`);
}

function demoFilter() {
  const result = numbers.filter((num) => num % 2 === 0);
  showResult(`Original: [${numbers}]\nfilter(even): [${result}]`);
}

function demoReduce() {
  const result = numbers.reduce((acc, curr) => acc + curr, 0);
  showResult(`Original: [${numbers}]\nreduce(sum): ${result}`);
}

function demoForEach() {
  let text = "";
  numbers.forEach((num) => {
    text += num + " ";
  });
  showResult(`Original: [${numbers}]\nforEach(print): ${text}`);
}

function demoSplice() {
  const copy = [...numbers];
  copy.splice(2, 1, 99);
  showResult(`Original: [${numbers}]\nsplice(2,1,99): [${copy}]`);
}
