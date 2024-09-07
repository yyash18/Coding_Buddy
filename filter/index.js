document.addEventListener('DOMContentLoaded', function () {
    const topicForm = document.getElementById('topicForm');
    topicForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const topics = document.getElementById('topics').value;
        if (!topics) {
            alert('Please enter at least one topic');
            return;
        }
        fetchQuestions(topics);
    });
});

function fetchQuestions(topics) {
    const apiUrl = `https://alfa-leetcode-api.onrender.com/problems?tags=${topics}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayQuestions(data.problemsetQuestionList))
        .catch(error => console.error('Error fetching questions:', error));
}

function displayQuestions(questions) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear previous data

    if (questions.length === 0) {
        const messageRow = document.createElement('tr');
        const messageCell = document.createElement('td');
        messageCell.setAttribute('colspan', '6');
        messageCell.textContent = 'No questions found';
        messageRow.appendChild(messageCell);
        tableBody.appendChild(messageRow);
    } else {
        questions.forEach(question => {
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = question.title;
            const difficultyCell = document.createElement('td');
            difficultyCell.textContent = question.difficulty;
            const tagsCell = document.createElement('td');
            const tags = question.topicTags.map(tag => tag.name).join(', ');
            tagsCell.textContent = tags;
            const acRateCell = document.createElement('td');
            acRateCell.textContent = `${question.acRate}%`;
            const hasSolutionCell = document.createElement('td');
            hasSolutionCell.textContent = question.hasSolution ? 'Yes' : 'No';
            const hasVideoSolutionCell = document.createElement('td');
            hasVideoSolutionCell.textContent = question.hasVideoSolution ? 'Yes' : 'No';

            row.appendChild(titleCell);
            row.appendChild(difficultyCell);
            row.appendChild(tagsCell);
            row.appendChild(acRateCell);
            row.appendChild(hasSolutionCell);
            row.appendChild(hasVideoSolutionCell);

            tableBody.appendChild(row);
        });
    }
}
