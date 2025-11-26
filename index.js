function add (x, y){
    return x + y;
}

function printNumbers(x) {
    for(let i = 1; i < x+1; i++)
    console.log(i);
}

const players = [
    {name: "Derrick Henry"}, 
    {name: "Jordan Love"}, 
    {name: "Josh Jacobs"}
];

function printList(x) { 
    for(let i = 0; i < x.length; i++)
    console.log(x[i]);
}

function printPlayerNames(players) {
  players.forEach(player => {
    console.log(player.name);
  });
}

const axios = require("axios");

async function getLeagueTransactions() {
  const leagueId = "1257433027324153856";
  const week = 10;

  console.log(leagueId);
  console.log(week);

  try {
    const url = `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`;
    const response = await axios.get(url);
    
    console.log("Data received:");
    console.log(response.data);
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
  }
}

getLeagueTransactions();
