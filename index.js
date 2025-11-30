// Testing Sleeper API call

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

