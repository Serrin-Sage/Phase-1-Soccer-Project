console.log("JS is running")
const teamCard = document.getElementById("card")
const teamImage = document.getElementById("team-image")
const teamCountry = document.getElementById("team-country")
const teamRecentResult = document.getElementById("recent-result")
const teamBestResult = document.getElementById("best-result")
const teamCaptain = document.getElementById("captain")


const fetchDB = () => {
    fetch("http://localhost:3000/world-cup")
    .then((res) => res.json())
    .then((data => {
        data.forEach((item) => renderTeams(item));
        teamImage.src = data[0]["team_image"];
        teamCountry.textContent = data[0].country;
        // teamRecentResult.textContent = data[0]["2018_result"];
        teamBestResult.textContent = data[0].best;
        teamCaptain.textContent = data[0].captain;
    }))
}

const renderTeams = (teamObj) => {
    
}

fetchDB()