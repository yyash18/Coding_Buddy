window.onload = function () {
  fetchData();
};

function fetchData() {
  fetch("https://alfa-leetcode-api.onrender.com/daily")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("questionTitle").textContent = data.questionTitle;
      document.getElementById("questionDescription").innerHTML = data.question;
      document.getElementById("questionLink").href = data.questionLink;
    })
    .catch((error) => console.error("Error:", error));
}
