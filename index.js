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

let globalTeamObj;
let selectedId = 1
let teamJsonObject = {};
//Fetch database, for each object => render the team
//set initial card to first object properties
const fetchDB = () => {
    fetch("http://localhost:3000/world-cup")
    .then((res) => res.json())
    .then((data => {
        data.forEach((item) => {
            teamJsonObject[item.country] = item;
        })
        data.forEach((item) => renderTeams(item));
        globalTeamObj = data;
        teamImage.src = data[0]["team_image"];
        teamCountry.textContent = data[0].country;
        teamRecentResult.textContent = `2018: ${data[0]["2018_result"]}`
        teamBestResult.textContent = `Best: ${data[0].best}`;
        teamCaptain.textContent = `Captain: ${data[0].captain}`;
        votes.textContent = `Votes: ${data[0].votes}`
        teamCard.setAttribute("id", `flag-${data[0].id}`);
        votes.setAttribute("id", `${data[0].country}`)
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
        votes.textContent = `Votes: ${teamObj.votes}`;
        teamCard.setAttribute("id", `flag-${teamObj.id}`);
        votes.setAttribute("id", `${teamObj.country.replace(" ","-")}`)
        selectedId = teamObj.id
    })

    flagImage.addEventListener("mouseover", () => {
        flagImage.style.boxShadow = "8px 8px 5px rgba(0, 0, 0, 0.74)"
    })
    flagImage.addEventListener("mouseout", () => {
        flagImage.style.boxShadow = "none"
    })
    
}


//creating variables for form
const chooseWinnerForm = document.getElementById('choose-winner-form')
const heading = document.getElementById('heading')
const voteList = document.getElementById("vote-list")
// let currentVotes = 0;

let countrySet = new Set()
chooseWinnerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const votedCountry = chooseWinnerForm.formAnswer.value
    
    if (teamJsonObject[votedCountry]) {
        teamJsonObject[votedCountry].votes = teamJsonObject[votedCountry].votes + 1
        countrySet.add(votedCountry)
        voteList.innerHTML = ""
        //Remove children and update specified country
        Array.from(countrySet).forEach(country => {
            let testElement = document.createElement("p")
            testElement.textContent = country + " " + teamJsonObject[country].votes
            voteList.append(testElement)
        })
        let currentCountry = document.getElementById('team-country').textContent
        document.getElementById(currentCountry.replace(" ","-")).textContent = `Votes: ${teamJsonObject[currentCountry].votes}`
        console.log(teamJsonObject)
    } 
   
    
})

fetchDB()
// console.log(globalTeamObj)
