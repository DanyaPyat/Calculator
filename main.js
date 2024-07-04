let result = 0;
document.querySelectorAll('.button').forEach(button => {
    button.onclick = function () {
        if (this.id === "clear") {
            document.getElementById('resultField').value = ""
        } else if (this.id === "eq") {
            document.getElementById('resultField').value = eval(document.getElementById('resultField').value)
        } else if (this.classList.contains('zn')) {
            document.getElementById('resultField').value += this.value
        } else {
            document.getElementById('resultField').value += this.id
        }

    }
});