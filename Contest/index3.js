// index3.js
function fetchData() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username');
        return;
    }

    fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`)
        .then(response => response.json())
        .then(data => {
            const contestParticipation = data.contestParticipation;
            const tableBody = document.querySelector('#contestTable tbody');

            // Clear existing table rows
            tableBody.innerHTML = '';

            // Populate table with contest participation data
            contestParticipation.forEach(contest => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = contest.contest.title;
                row.insertCell(1).textContent = contest.rating;
                row.insertCell(2).textContent = contest.ranking;
                row.insertCell(3).textContent = contest.trendDirection;
                row.insertCell(4).textContent = contest.problemsSolved;
                row.insertCell(5).textContent = contest.totalProblems;
                row.insertCell(6).textContent = contest.finishTimeInSeconds;
                row.insertCell(7).textContent = new Date(contest.contest.startTime * 1000).toLocaleString();
            });
        })
        .catch(error => console.error('Error:', error));
}
