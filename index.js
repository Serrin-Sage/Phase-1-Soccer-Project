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
const votes = document.getElementById('votes')

//creating variables for form
const chooseWinnerForm = document.getElementById('choose-winner-form')
const button = document.getElementById('button')
const formAnswer = document.getElementById('form-answer')
let count = 0
const heading = document.getElementById('heading')

let p = document.createElement('p')
p.innerText = count
heading.append(p)



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
        votes.textContent = `Votes: ${data[0].votes}`
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
        teamCaptain.textContent = `Captain: ${teamObj.captain}`;
        votes.textContent = `Votes: ${teamObj.votes}` 
        teamCard.setAttribute("id", `flag-${teamObj.id}`)
    })

    flagImage.addEventListener("mouseover", () => {
        flagImage.style.boxShadow = "8px 8px 5px rgba(0, 0, 0, 0.74)"
    })
    flagImage.addEventListener("mouseout", () => {
        flagImage.style.boxShadow = "none"
    })
    
    chooseWinnerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        count = count + 1
        p.innerText = count
        if (chooseWinnerForm.formAnswer.value === teamObj.country){
            votes.textContent = count
        }
    })
}

fetchDB()
