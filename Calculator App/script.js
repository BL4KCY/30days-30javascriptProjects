const display = document.getElementById("display");
const maxlen = 20;
let		opAllowed = false;
let		dotAllowed = false;	

function append(char) {
	if (display.value == 'Error') {
		display.value = '';
	}
	if (display.value.length < maxlen) {
		let lastChar = display.value.slice(-1);
		let	ops = ['+', '-', '*', '/'];
		if (ops.includes(char) && ops.includes(lastChar)) {
			display.value = display.value.slice(0, -1) + char;
			return;
		}
		display.value += char;
	}
}

function clearDisplay() {
	display.value = "";
}

function deleteChar() {
	display.value = display.value.slice(0, -1);
}

function percent() {
  try {
    if (display.value === "") return;
    let value = eval(display.value);
    display.value = value / 100;
  } catch (e) {
    display.value = "Error";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
