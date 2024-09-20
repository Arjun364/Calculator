
const display=(value)=>{
    let display = document.getElementById('display').value
    if(display === '0'){
        display = ''
    }
    document.getElementById('display').value = display + value
    
}

function clearDisplay() {
    document.getElementById('display').value = ''; 
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1); 
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}