// index.js

const todoForm = document.getElementById('todoForm');
const todoTable = document.getElementById('todoTable').getElementsByTagName('tbody')[0];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const questionName = this.elements['questionName'].value;
    const questionLink = this.elements['questionLink'].value;
    const questionType = this.elements['questionType'].value;
    
    const row = todoTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    
    cell1.textContent = questionName;
    cell2.innerHTML = `<a href="${questionLink}" target="_blank">${questionLink}</a>`;
    cell3.textContent = questionType;
    cell4.innerHTML = `<input type="checkbox">`;
    
    this.reset();
});

todoTable.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        const row = event.target.closest('tr');
        if (event.target.checked) {
            row.style.backgroundColor = 'lightgrey';
            row.style.color = 'black'; // Change text color to black
        } else {
            row.style.backgroundColor = '';
            row.style.color = ''; // Reset text color
        }
    }
});
