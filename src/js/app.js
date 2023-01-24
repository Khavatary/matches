export default function sortHealth(players) {
  const arrPlayers = players;
  const resultSort = arrPlayers.sort((first, second) => second.health - first.health);
  return resultSort;
}
