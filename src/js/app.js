export default function status(player) {
  if (player.health > 50) {
    return 'healthy';
  } if (player.health > 14 && player.health < 51) {
    return 'wounded';
  }
  return 'critical';
}
