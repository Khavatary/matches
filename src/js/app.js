export default function sortHealth(players) {
  const clonPlayers = [...players];
  return clonPlayers.sort((first, second) => second.health - first.health);
}
