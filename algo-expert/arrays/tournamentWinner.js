const HOME_TEAM_WON = 1;

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += 3;
}

function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = {
    [currentBestTeam]: 0,
  };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}
