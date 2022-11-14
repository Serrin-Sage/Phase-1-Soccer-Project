console.log("JS is running")

//Get flag elements
const flagContainer = document.getElementById("flag-container")

//Get team card elements
const teamCard = document.getElementById("card")
const teamImage = document.getElementById("team-image")
const teamCountry = document.getElementById("team-country")
const teamRecentResult = document.getElementById("recent-result")
const teamBestResult = document.getElementById("best-result")
const teamCaptain = document.getElementById("captain")


//Fetch database, for each object => render the team
//set initial card to first object properties
const fetchDB = () => {
    fetch("http://localhost:3000/world-cup")
    .then((res) => res.json())
    .then((data => {
        data.forEach((item) => renderTeams(item));
        teamImage.src = data[0]["team_image"];
        teamCountry.textContent = data[0].country;
        teamRecentResult.textContent = `2018: ${data[0]["2018_result"]}`
        teamBestResult.textContent = `Best: ${data[0].best}`;
        teamCaptain.textContent = data[0].captain;
        teamCard.style.backgroundColor = "#8A1538";
        teamCard.style.color = "white"
    }))
}


//Render the team object properties 
//When each flag is clicked, card display will change.
const renderTeams = (teamObj) => {
    const flagImage = document.createElement("img")
    flagImage.setAttribute("class", "flag-image")
    flagImage.src = teamObj.flag;
    flagContainer.append(flagImage)

    flagImage.addEventListener("click", () => {
        teamImage.src = teamObj["team_image"];
        teamCountry.textContent = teamObj.country;
        teamRecentResult.textContent = `2018: ${teamObj["2018_result"]}`;
        teamBestResult.textContent = `Best: ${teamObj.best}`
        teamCaptain.textContent = teamObj.captain;
        teamCard.setAttribute("class", `${teamObj.country}`)
    })

}

fetchDB()
