document.addEventListener('DOMContentLoaded', function () {
    const userIdForm = document.getElementById('userIdForm');
    userIdForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userId = document.getElementById('userId').value;
        if (!userId) {
            alert('Please enter a LeetCode User ID');
            return;
        }
        fetchUserData(userId);
    });
});

function fetchUserData(userId) {
    const acSubmissionUrl = `https://alfa-leetcode-api.onrender.com/${userId}/acSubmission`;
    const submissionUrl = `https://alfa-leetcode-api.onrender.com/${userId}/submission`;

    fetch(acSubmissionUrl)
        .then(response => response.json())
        .then(data => displaySubmissions(data, 'acceptedTable'))
        .catch(error => console.error('Error fetching accepted submissions:', error));

    fetch(submissionUrl)
        .then(response => response.json())
        .then(data => displaySubmissions(data, 'submittedTable'))
        .catch(error => console.error('Error fetching submitted submissions:', error));
}

function displaySubmissions(submissionData, tableId) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Clear previous data

    if (submissionData.count === 0) {
        const messageRow = document.createElement('tr');
        const messageCell = document.createElement('td');
        messageCell.setAttribute('colspan', '4');
        messageCell.textContent = 'No submissions found';
        messageRow.appendChild(messageCell);
        tbody.appendChild(messageRow);
    } else {
        submissionData.submission.forEach(submission => {
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = submission.title;
            const timestampCell = document.createElement('td');
            timestampCell.textContent = new Date(Number(submission.timestamp) * 1000).toLocaleString();
            const statusCell = document.createElement('td');
            statusCell.textContent = submission.statusDisplay;
            const langCell = document.createElement('td');
            langCell.textContent = submission.lang;
            row.appendChild(titleCell);
            row.appendChild(timestampCell);
            row.appendChild(statusCell);
            row.appendChild(langCell);
            tbody.appendChild(row);
        });
    }
}
