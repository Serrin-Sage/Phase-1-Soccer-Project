# 2022 World Cup Voter

The 2022 World Cup Voter provides a complete profile on all 32 countries competing in the 2022 World Cup in Qatar. Users can see a description on each country's historical and recent success. Using this information, they are encouraged to put in their vote for who they believe will take home the trophy. 

## Installation 

If you do not have json-server installed, type this command into your terminal: 

    npm install json-server

## Setup 

To get started, run your json-server: 

    json-server --watch db.json


You can test out if your server is working by following the below link: 

    http://localhost:3000/world-cup 

## Functionality 

All 32 countries' respective flags are rendered in a div on the left side of the page. If a user clicks on one of these images, an image of that country's team, along with additional info, will display in the center div. If the user desires, they are able to then predict who the winner will be. This is done via the form rendered on the right side of the page. Simply type in the name of the country in the input bar and hit "VOTE." That country's name will then display below with the vote count next to it. Hit "VOTE" again and the vote count will continue to increase by one. If one so chooses, they can pick another country and that one will display below the first one. 
