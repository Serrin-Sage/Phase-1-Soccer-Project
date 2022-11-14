console.log("JS is running")

//Get flag elements
const flagContainer = document.getElementById("flag-container")

//Get team card elements
const teamCard = document.querySelector(".card")
const teamImage = document.getElementById("team-image")
const teamCountry = document.getElementById("team-country")
const teamRecentResult = document.getElementById("recent-result")
const teamBestResult = document.getElementById("best-result")
const teamCaptain = document.getElementById("captain")

//creating variables for form
const chooseWinnerForm = document.getElementById('choose-winner-form')
const button = document.getElementById('button')

chooseWinnerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let formAnswer = document.createElement('p')
    chooseWinnerForm.innerText = chooseWinnerForm.formAnswer.value
})


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
        teamCaptain.textContent = `Captain: ${data[0].captain}`;
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
        teamCard.setAttribute("id", `${teamObj.country}`)
    })

}

fetchDB()
