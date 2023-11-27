async function getTeams(year, k) {
  let teams = {};

  // Fetch all pages of data for the given year
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();

    // Update total pages if it hasn't been updated yet
    if (totalPages === 1) {
      totalPages = data.total_pages;
    }

    // Iterate over matches and update team counts
    data.data.forEach((match) => {
      teams[match.team1] = teams[match.team1] ? teams[match.team1] + 1 : 1;
      teams[match.team2] = teams[match.team2] ? teams[match.team2] + 1 : 1;
    });

    page++;
  }

  // Filter teams that played at least k matches
  const result = Object.entries(teams)
    .filter(([_, count]) => count >= k)
    .map(([team, _]) => team)
    .sort();

  return result;
}

getTeams(2015, 6).then((res) => console.log(res));
