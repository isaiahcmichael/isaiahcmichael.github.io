document.addEventListener('DOMContentLoaded', function () {
    const repoList = document.getElementById('repo-list');
    const username = 'isaiahcmichael'; // Replace with your GitHub username

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                repoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
// Define the last updated date string
const lastUpdatedDate = "01/04/2025";

// Update the "Last Updated" sections in the HTML
document.addEventListener("DOMContentLoaded", () => {
    // Update the footer
    const footerUpdate = document.querySelector("footer p");
    if (footerUpdate) {
        footerUpdate.textContent = `Last Updated - ${lastUpdatedDate}`;
    }
});
