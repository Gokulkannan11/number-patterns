function generatePattern() {
  const pattern = document.getElementById("pattern").value;
  const rows = parseInt(document.getElementById("rows").value);
  let output = "";

  if (pattern === "triangle") {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        output += j + " ";
      }
      output += "\n";
    }
  } 
  else if (pattern === "pyramid") {
    for (let i = 1; i <= rows; i++) {
      output += " ".repeat(rows - i);
      for (let j = 1; j <= i; j++) {
        output += j + " ";
      }
      output += "\n";
    }
  } 
  else if (pattern === "reverse") {
    for (let i = rows; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        output += j + " ";
      }
      output += "\n";
    }
  }

  document.getElementById("result").textContent = output;
}
