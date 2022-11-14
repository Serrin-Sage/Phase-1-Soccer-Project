console.log("JS is running")
const teamListTest = document.getElementById("team-list-test")

const fetchDB = () => {
    fetch("http://localhost:3000/world-cup")
    .then((res) => res.json())
    .then((data => {
        data.forEach((item) => renderTeams(item))
    }))
}

const renderTeams = (teamObj) => {
    const teamItem = document.createElement("li")
    teamItem.textContent = teamObj.id

    teamListTest.append(teamItem)
}

fetchDB()