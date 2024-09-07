function fetchBadges() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username");
    return;
  }

  fetch(`https://alfa-leetcode-api.onrender.com/${username}/badges`)
    .then((response) => response.json())
    .then((data) => {
      const badgesContainer = document.getElementById("badgesContainer");
      badgesContainer.innerHTML = ""; // Clear previous content
      data.badges.forEach((badge) => {
        const badgeElement = document.createElement("div");
        badgeElement.classList.add("badge");

        const badgeImage = document.createElement("img");
        badgeImage.onerror = function () {
          // Handle badge image load error by setting src to a placeholder image
          this.src =
            "https://assets.leetcode.com/static_assets/marketing/lg100.png";
        };
        badgeImage.src = badge.icon;
        badgeElement.appendChild(badgeImage);

        const badgeDetails = document.createElement("div");
        badgeDetails.classList.add("badgeDetails");

        const badgeTitle = document.createElement("h2");
        badgeTitle.textContent = badge.displayName;
        badgeDetails.appendChild(badgeTitle);

        const badgeDate = document.createElement("p");
        badgeDate.textContent =
          "Earned on: " + new Date(badge.creationDate).toLocaleDateString();
        badgeDetails.appendChild(badgeDate);

        badgeElement.appendChild(badgeDetails);

        badgesContainer.appendChild(badgeElement);
      });
    })
    .catch((error) => console.error("Error:", error));
}
