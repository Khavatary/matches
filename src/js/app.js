export default function sortHealth(players) {
  return players.sort((first, second) => second.health - first.health);
}
