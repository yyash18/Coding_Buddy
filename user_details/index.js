function fetchData() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username');
        return;
    }

    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').textContent = data.status;
            document.getElementById('message').textContent = data.message;
            document.getElementById('totalSolved').textContent = data.totalSolved;
            document.getElementById('totalQuestions').textContent = data.totalQuestions;
            document.getElementById('easySolved').textContent = data.easySolved;
            document.getElementById('totalEasy').textContent = data.totalEasy;
            document.getElementById('mediumSolved').textContent = data.mediumSolved;
            document.getElementById('totalMedium').textContent = data.totalMedium;
            document.getElementById('hardSolved').textContent = data.hardSolved;
            document.getElementById('totalHard').textContent = data.totalHard;
            document.getElementById('acceptanceRate').textContent = data.acceptanceRate;
            document.getElementById('ranking').textContent = data.ranking;
            document.getElementById('contributionPoints').textContent = data.contributionPoints;
            document.getElementById('reputation').textContent = data.reputation;
        })
        .catch(error => console.error('Error:', error));
}
