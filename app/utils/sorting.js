export function sortResults(results) {
  if (!results) return [];

  return [...results].sort((a, b) => {
    const winComparison = b.win - a.win;
    if (winComparison === 0) {
      const loseComparison = b.lose - a.lose;
      if (loseComparison === 0) {
        const totalKilla = a.kill.reduce((acc, current) => acc + current, 0);
        const totalKillb = b.kill.reduce((acc, current) => acc + current, 0);
        return totalKillb - totalKilla;
      }
      return loseComparison;
    }
    return winComparison;
  });
}